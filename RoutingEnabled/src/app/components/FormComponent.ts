import
{
	Component,
	View,
	bootstrap
} from "angular2/angular2"

import {FORM_DIRECTIVES, FormBuilder, ControlGroup,NgIf} from "angular2/angular2";


@Component(
{
	selector:'product-create'
	
})

@View
({
	directives: [FORM_DIRECTIVES,NgIf],
	template:`
	<div class="col-lg-6">
		<h2>Products - Create Product </h2>
		<form [ng-form-model]="productForm"
				(submit)="onSubmit(productForm.value)">
			<div class="form-group">
				<label for="nameInput">Product Name</label>
				<input type="text"  
					class="form-control"
					id="nameInput"
					placeholder="Product Name"
					[ng-form-control]="productForm.controls['productName']">
			</div>
			<div class="form-group">
				<label for="descriptionInput">Description</label>
				<input type="text"  
					class="form-control"
					id="descriptionInput"
					placeholder="tell me about your product ....."
					[ng-form-control]="productForm.controls['productDescription']">
			</div>
			<div class="form-group">
				<label for="priceInput">Price</label>
				<input type="text"  
					class="form-control"
					id="priceInput"
					placeholder="Price of Product in Rupeers"
					[ng-form-control]="productForm.controls['productPrice']">
			</div>
			<div class="form-group">
				<label for="stockInput">Stock in Quanity</label>
				<input type="text"  
					class="form-control"
					id="stockInput"
					placeholder="How many products available"
					[ng-form-control]="productForm.controls['productStock']">
			</div>
			<div class="form-group">
				<label for="categoryInput">Category</label>
				<input type="text"  
					class="form-control"
					id="categoryInput"
					placeholder="Which category product belongs to"
					[ng-form-control]="productForm.controls['productCategory']">
			</div>
			
			<button type="submit" class="btn btn-default">Submit</button>
		</form>
		<div *ng-if="resultReady" class="alert alert-success" role="alert">Product Saved Successfully. Product Id : {{productId}}</div>
	</div>`	
})

export class FormComponent
{
	productForm:ControlGroup;
	productId:number;
	resultReady:boolean;
	
	constructor(fb:FormBuilder)
	{
		this.resultReady=false;
		this.productForm = fb.group({
		"productName":[""],
		"productDescription":[""],
		"productPrice":[""],
		"productStock":[""],
		"productCategory":[""],
		});
	}
	
	onSubmit(value)
	{
		this.resultReady=false;
		console.log(JSON.stringify(value));
		this.productId = this.getProductId();
		this.resultReady=true;
	}
	
	getProductId():number
	{
		return Math.floor(Math.random() * 999999 );
		
	}
	
}