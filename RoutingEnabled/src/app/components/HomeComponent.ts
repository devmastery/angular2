
/*
 * Angular
 */
import {Component, View} from "angular2/angular2";
import {
  APP_BASE_HREF,
  ROUTER_PROVIDERS,
  ROUTER_DIRECTIVES,
  ROUTER_PRIMARY_COMPONENT,
  HashLocationStrategy,
  LocationStrategy,
  RouterOutlet,
  Router,
  RouterLink,
  RouteConfig,
  RouteParams,
} from "angular2/router";


@Component({
  selector: "home"
})
@View({
  directives:[ROUTER_DIRECTIVES],
  template: `<h1>Welcome!</h1><a [router-link]="['/About']">About</a>`
})
export class HomeComponent {
}
