import { Schema } from "mongoose";
import * as controllers from '../../controllers/products.controller';

const productsModel = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  product_id: { type: String, required: true }
});

productsModel.statics = controllers;

export default productsModel;