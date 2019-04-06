import { Schema } from "mongoose";

const pricingRulesModel = new Schema({
    type: { type: String, required: true, enum: ['VALUE_FREE_AFTER_X', 'VALUE_AFTER_X'] },
    customer: { type: Schema.ObjectId, ref: 'customers', required: true },
    product_id: { type: String, required: true },
    params: {
      x: { type: Number },
      value: { type: Number }
    }
});

export default pricingRulesModel;