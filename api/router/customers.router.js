import express from 'express';
import mongoose from 'mongoose';
import { handle } from './handler';

const createRouter = () => {
  const Customers = mongoose.model('customers');

  var router = express.Router();

  router.get("/", handle(Customers.getAll));

  router.put("/:id/prices", handle(Customers.getPrices));
  
  return router;
}

export default createRouter;