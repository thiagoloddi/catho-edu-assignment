import express from 'express';
import mongoose from 'mongoose';

import { handle } from './handler';

const createRouter = () => {
  const Products = mongoose.model('products');
  const router = express.Router();

  router.get("/", handle(Products.getAll));

  return router;
}

export default createRouter;