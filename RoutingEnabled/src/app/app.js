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
var angular2_1 = require('angular2/angular2');
var router_1 = require("angular2/router");
var http_1 = require("angular2/http");
/*
 * Components
 */
var HomeComponent_1 = require("./components/HomeComponent");
var AboutComponent_1 = require("./components/AboutComponent");
var ContactComponent_1 = require("./components/ContactComponent");
var ArticleComponent_1 = require("./components/ArticleComponent");
var BasicHttpComponent_1 = require("./components/BasicHttpComponent");
var FormComponent_1 = require("./components/FormComponent");
var mainApp = (function () {
    function mainApp(router) {
        this.router = router;
    }
    mainApp = __decorate([
        angular2_1.Component({
            selector: 'mainApp'
        }),
        angular2_1.View({
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n  \n    <div class=\"container\">\n    <nav class=\"navbar navbar-default\" style=\"height:100px\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-heade\">\n\t\t<a class=\"navbar-brand\" href=\"#\">\n        <img alt=\"Brand\" src=\"images/logo.png\" style=\"width:80px\">\n      </a>\n\t\t</div>\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" style=\"margin:30px\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a [router-link]=\"['/Home']\">Home</a></li>\n\t\t\t\t<li><a [router-link]=\"['/About']\">About</a></li>\n\t\t\t\t<li><a [router-link]=\"['/Contact']\">Contact us</a></li>\n        <li><a [router-link]=\"['/Article',{category:'mobile',id:245}]\" >Article</a></li>\n        <li><a [router-link]=\"['/BasicHttp',{articleId:2}]\" >Basic Http</a></li>\n        <li><a [router-link]=\"['/Forms',{articleId:2}]\" >Forms</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>\n    <router-outlet></router-outlet> \n</div>\n  \n  \n    "
        }),
        router_1.RouteConfig([
            { path: "/src/", redirectTo: "/home" },
            { path: "/home", as: "Home", component: HomeComponent_1.HomeComponent },
            { path: "/about", as: "About", component: AboutComponent_1.AboutComponent },
            { path: "/contact", as: "Contact", component: ContactComponent_1.ContactComponent },
            { path: "/article/:category/:id", as: "Article", component: ArticleComponent_1.ArticleComponent },
            { path: "/basicHttp/:articleId", as: "BasicHttp", component: BasicHttpComponent_1.BasicHttpComponent },
            { path: "/forms", as: "Forms", component: FormComponent_1.FormComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], mainApp);
    return mainApp;
})();
// bootstrap(mainApp, [
//   ROUTER_PROVIDERS,
//   provide(ROUTER_PRIMARY_COMPONENT, {useValue: mainApp}),
//   provide(APP_BASE_HREF, {useValue: '/'})
// ]);
angular2_1.bootstrap(mainApp, [http_1.HTTP_BINDINGS,
    router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, { useValue: mainApp }),
    angular2_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map