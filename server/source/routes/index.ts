"use strict";
import * as express from  "express";

module Route {
  export class Index {
    public test(req: express.Request, res: express.Response, next: express.NextFunction) {
      res.send('index.test');
      next();
    }
  }
}

export = Route;
