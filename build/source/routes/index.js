"use strict";
var Route;
(function (Route) {
    var Index = (function () {
        function Index() {
        }
        Index.prototype.test = function (req, res, next) {
            res.send('index.test');
            next();
        };
        return Index;
    }());
    Route.Index = Index;
})(Route || (Route = {}));
module.exports = Route;
//# sourceMappingURL=index.js.map