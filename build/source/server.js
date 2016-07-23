"use strict";
/// <reference path="../../typings/express/express" />
/// <reference path="../../typings/body-parser/body-parser" />
var express = require("express");
var indexRoute = require("./routes/index");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        var index = new indexRoute.Index();
        router.get("/test", index.test.bind(index.test));
        this.app.use(router);
    };
    Server.prototype.listen = function (port) {
        this.port = port;
        this.app.set('port', this.port);
        this.app.listen(this.port);
    };
    Server.prototype.config = function () {
    };
    return Server;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Server;
//# sourceMappingURL=server.js.map