import express from "express";
import bodyParser from 'body-parser';

import customersRouter from "../api/router/customers.router";
import productsRouter from "../api/router/products.router";

export default () => {
  const app = express();
	
  app.use(bodyParser.json());

  app.use('/customers', customersRouter());
  app.use('/products', productsRouter());


  return app;
}