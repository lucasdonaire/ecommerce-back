import express, { NextFunction } from "express";

import client from "./clientRouter";
import shop from "./shopRouter";
import product from "./productRouter";
import order from "./orderRouter";
import orderProduct from "./productOrderRouter";


function logger(req:Request, res:Response, next: NextFunction){
  console.log('\nIncoming Request')
  console.log(req.method + req.url)
  if(['PUT','POST'].includes(req.method)){
    console.log(req.body);
  };
  next()
}

function routes(app: any) { // express app
  app.use(
    express.json(),
    logger,
    client,
    shop,
    product,
    order,
    orderProduct
  );
}

export default routes;