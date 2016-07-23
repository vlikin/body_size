"use strict";
/// <reference path='../../typings/mocha/mocha' />
/// <reference path='../../typings/supertest' />
/// <reference path="../../typings/superagent/superagent"/>
import Calculator from '../source/index';
import * as express from "express";
import Server from "../source/server";
import * as request from "supertest";

describe("routes", function() {
  var server: Server = Server.bootstrap();
  it("GET /test", function(done) {
    var agent = agent;
    request(server.app)
      .get("/test")
      .expect("index.test")
      .expect(200, done);
  });
});
