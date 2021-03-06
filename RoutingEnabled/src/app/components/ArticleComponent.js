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
/*
 * Angular
 */
var angular2_1 = require("angular2/angular2");
var router_1 = require("angular2/router");
var ArticleComponent = (function () {
    function ArticleComponent(routeParams) {
        this.routeParams = routeParams;
        this.id = routeParams.get("id");
        this.category = routeParams.get("category");
    }
    ArticleComponent = __decorate([
        angular2_1.Component({
            selector: "article"
        }),
        angular2_1.View({
            template: "<h1>Article Id: {{id}}</h1>\n              <h2>Product Category : {{category}} </h2>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams])
    ], ArticleComponent);
    return ArticleComponent;
})();
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=ArticleComponent.js.map