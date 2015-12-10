import {provide,bootstrap, Component,View} from 'angular2/angular2';

import {
  APP_BASE_HREF,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  ROUTER_PRIMARY_COMPONENT,
  HashLocationStrategy,
  LocationStrategy,
  Router,
  RouterOutlet,
  RouterLink,
  RouteConfig,
  RouteParams,
} from "angular2/router";

import {HTTP_BINDINGS} from "angular2/http";

/*
 * Components
 */
import {HomeComponent} from "./components/HomeComponent";
import {AboutComponent} from "./components/AboutComponent";
import {ContactComponent} from "./components/ContactComponent";
import {ArticleComponent} from "./components/ArticleComponent";
import {BasicHttpComponent} from "./components/BasicHttpComponent";
import {FormComponent} from "./components/FormComponent";



@Component({
    selector: 'mainApp'
})
@View({
    directives:[ROUTER_DIRECTIVES],
    template: `
  
    <div class="container">
    <nav class="navbar navbar-default" style="height:100px">
	<div class="container-fluid">
		<div class="navbar-heade">
		<a class="navbar-brand" href="#">
        <img alt="Brand" src="images/logo.png" style="width:80px">
      </a>
		</div>
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="margin:30px">
			<ul class="nav navbar-nav">
				<li><a [router-link]="['/Home']">Home</a></li>
				<li><a [router-link]="['/About']">About</a></li>
				<li><a [router-link]="['/Contact']">Contact us</a></li>
        <li><a [router-link]="['/Article',{category:'mobile',id:245}]" >Article</a></li>
        <li><a [router-link]="['/BasicHttp',{articleId:2}]" >Basic Http</a></li>
        <li><a [router-link]="['/Forms',{articleId:2}]" >Forms</a></li>
			</ul>
		</div>
	</div>
</nav>
    <router-outlet></router-outlet> 
</div>
  
  
    `
})

@RouteConfig([
  { path: "/src/", redirectTo: "/home" },
  { path: "/home",    as: "Home",    component: HomeComponent },
  { path: "/about",   as: "About",   component: AboutComponent },
  { path: "/contact", as: "Contact", component: ContactComponent },
  { path: "/article/:category/:id", as: "Article", component: ArticleComponent },
  { path: "/basicHttp/:articleId", as: "BasicHttp", component: BasicHttpComponent },
  { path: "/forms", as: "Forms", component: FormComponent }
  
])
class mainApp {
    constructor(public router: Router)
    {}
 }


// bootstrap(mainApp, [
//   ROUTER_PROVIDERS,
//   provide(ROUTER_PRIMARY_COMPONENT, {useValue: mainApp}),
//   provide(APP_BASE_HREF, {useValue: '/'})
// ]);


bootstrap(mainApp, [HTTP_BINDINGS,
  ROUTER_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {useValue: mainApp}),
  provide(APP_BASE_HREF, {useValue: '/'}),
  provide(LocationStrategy,{ useClass:HashLocationStrategy})
]);
