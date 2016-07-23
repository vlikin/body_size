/// <reference path="../../typings/express/express" />
/// <reference path="../../typings/body-parser/body-parser" />
import * as express from "express";
import * as bodyParser from "body-parser";
import * as indexRoute from "./routes/index";

export default class Server {
  public app: express.Application;
  public port: number;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private routes() {
    let router: express.Router = express.Router();
    var index: indexRoute.Index = new indexRoute.Index();
    router.get("/test", index.test.bind(index.test));
    this.app.use(router);
  }

  public listen(port: number) {
    this.port = port;
    this.app.set('port', this.port);
    this.app.listen(this.port);
  }

  public config() {
  }
}
