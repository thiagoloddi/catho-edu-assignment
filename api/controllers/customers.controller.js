import mongoose from 'mongoose';
import Checkout from '../interfaces/Checkout';

export const getAll = async () => {
  const Customers = mongoose.model('customers');
  
  try {
    const data = await Customers.find();
    return { status: 200, data };
  } catch(e) {
    return { status: 500, data: e };
  }
}

export const getPrices  = async ({ id }, body) => {
  const PricingRules = mongoose.model('pricing_rules');
  
  try {
    const pricingRules = await PricingRules.find({ customer: id });
    
    const co = new Checkout(pricingRules);
    body.forEach(item => {
      co.add(item);
    });
  
    return {
      status: 200, data: { sum: co.total() }
    }
  } catch(e) {
    return { status: 500, data: e };
  }
}