import { Schema } from "mongoose";
import * as controllers from "../../controllers/customers.controller";

const customersModel = new Schema({
    name: { type: String, required: true },
    orders: [{ type: Schema.ObjectId, ref: 'orders' }],
    pricing_rules: [{ type: Schema.ObjectId, ref: 'pricing_rules' }],
});

customersModel.statics = controllers;

export default customersModel;