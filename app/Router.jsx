import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from './ui/components/NotFound';
import AsyncComponent from './hocs/AsyncComponent';

const checkout = import(/* webpackChunkName: "checkout" */ "./modules/checkout/index");

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <AsyncComponent provider={checkout} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}