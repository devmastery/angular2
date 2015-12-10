
/*
 * Angular
 */
import {Component, View} from "angular2/angular2";
import {RouteParams} from "angular2/router";

@Component({
  selector: "article"
})
@View({
  template: `<h1>Article Id: {{id}}</h1>
              <h2>Product Category : {{category}} </h2>
    `
})
export class ArticleComponent {
  id:string;
  category:string;
  constructor(private routeParams:RouteParams){
    
    this.id = routeParams.get("id"); 
    this.category = routeParams.get("category");
  }
  
}
