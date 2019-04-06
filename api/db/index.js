import mongoose from "mongoose";

import { MONGO_URL } from "../../env.config";

import customers from "./models/customers.model";
import products from "./models/products.model";
import pricingRules from "./models/pricing_rules.model";

const mongodb = async () => {

    mongoose.model('customers', customers);
    mongoose.model('products', products);
    mongoose.model('pricing_rules', pricingRules);

    mongoose.set('useFindAndModify', false);
    
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
}

export default mongodb;