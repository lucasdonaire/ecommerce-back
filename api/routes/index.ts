import express from "express";

import client from "./clientRouter";
import shop from "./shopRouter";
import product from "./productRouter";
import order from "./orderRouter";
import orderProduct from "./productOrderRouter";


function routes(app: any) { // express app
  app.use(
    express.json(),
    client,
    shop,
    product,
    order,
    orderProduct
  );
}

export default routes;