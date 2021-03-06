var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var http_1 = require("angular2/http");
var router_1 = require("angular2/router");
var BasicHttpComponent = (function () {
    function BasicHttpComponent(http, routeParams) {
        var _this = this;
        this.http = http;
        this.routeParams = routeParams;
        this.articleId = routeParams.get("articleId");
        this.loading = true;
        this.dataReady = false;
        this.http.request("http://jsonplaceholder.typicode.com/posts/" + this.articleId)
            .subscribe(function (res) {
            console.log('received data');
            console.log(JSON.stringify(res));
            _this.data = JSON.parse(res._body);
            _this.loading = false;
            _this.dataReady = true;
        });
    }
    BasicHttpComponent.prototype.makeRequest = function (id) {
        var _this = this;
        this.loading = true;
        this.dataReady = false;
        this.http.request("http://jsonplaceholder.typicode.com/posts/" + id)
            .subscribe(function (res) {
            console.log('received data');
            console.log(JSON.stringify(res));
            _this.data = JSON.parse(res._body);
            _this.loading = false;
            _this.dataReady = true;
        });
    };
    BasicHttpComponent = __decorate([
        angular2_1.Component({
            selector: "simpleHttp"
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf],
            template: "\n\t<h2> Basic Request</h2>\n\t<button type=\"button\" (click)=\"makeRequest(articleId)\">Make Request</button>\n\t<div *ng-if=\"loading\">Loading ...</div>\n\t<div *ng-if=\"dataReady\"><pre>{{data | json}}</pre></div>\n\t"
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.RouteParams])
    ], BasicHttpComponent);
    return BasicHttpComponent;
})();
exports.BasicHttpComponent = BasicHttpComponent;
//# sourceMappingURL=BasicHttpComponent.js.map