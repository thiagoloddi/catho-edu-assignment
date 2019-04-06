import mongoose from 'mongoose';
import mongodb from "../api/db";

import data from './data.sample';

(() => {
  console.log('connecting to db...');
  mongodb().
    then(async () => {
      const Products = mongoose.model('products');
      const Customers = mongoose.model('customers');
      const PricingRules = mongoose.model('pricing_rules');

      console.log('creating products...');
      await Products.deleteMany({});

      await Promise.all(data.products.map(p => new Products(p).save()));
      console.log('creating products...done');

      console.log('creating customers...');
      await Customers.deleteMany({});
      await PricingRules.deleteMany({});
      
      await Promise.all(data.customers.map(async (c) => {
        const { pricing_rules } = c;
        const customer = await new Customers({ ...c, pricing_rules: undefined });
        customer.pricing_rules = await Promise.all(pricing_rules.map(pr => {
          pr.customer = customer._id;
          return new PricingRules(pr).save();
        }))
        return customer.save();
      }));
      console.log('creating customers...done');

      process.exit();
    });
})();