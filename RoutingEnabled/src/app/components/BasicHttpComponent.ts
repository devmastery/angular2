import {View,Component,NgIf} from "angular2/angular2"

import {Http,HTTP_BINDINGS,Response} from "angular2/http"

import {RouteParams} from "angular2/router"

@Component({
	selector:"simpleHttp"
})
@View({
	directives:[NgIf],
	template:`
	<h2> Basic Request</h2>
	<button type="button" (click)="makeRequest(articleId)">Make Request</button>
	<div *ng-if="loading">Loading ...</div>
	<div *ng-if="dataReady"><pre>{{data | json}}</pre></div>
	`	
	})
	
export class BasicHttpComponent
{
	data:Object;
	loading:boolean;
	dataReady:boolean;
	articleId:String;
	
	constructor(public http:Http, private routeParams:RouteParams){
		this.articleId = routeParams.get("articleId");
		
		this.loading=true;
		this.dataReady=false;
		this.http.request("http://jsonplaceholder.typicode.com/posts/" + this.articleId)
		.subscribe((res:Response) => {
			console.log('received data');
			console.log(JSON.stringify(res));
			this.data=JSON.parse(res._body);
			this.loading=false;
			this.dataReady=true;
		});
		
	}
	
	makeRequest(id:string)
	{
		this.loading=true;
		this.dataReady=false;
		this.http.request("http://jsonplaceholder.typicode.com/posts/" + id)
		.subscribe((res:Response) => {
			console.log('received data');
			console.log(JSON.stringify(res));
			this.data=JSON.parse(res._body);
			this.loading=false;
			this.dataReady=true;
		});
	}
}