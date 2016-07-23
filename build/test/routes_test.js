"use strict";
var server_1 = require("../source/server");
var request = require("supertest");
describe("routes", function () {
    var server = server_1.default.bootstrap();
    it("GET /test", function (done) {
        var agent = agent;
        request(server.app)
            .get("/test")
            .expect("index.test")
            .expect(200, done);
    });
});
//# sourceMappingURL=routes_test.js.map