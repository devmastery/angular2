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
var angular2_2 = require("angular2/angular2");
var FormComponent = (function () {
    function FormComponent(fb) {
        this.resultReady = false;
        this.productForm = fb.group({
            "productName": [""],
            "productDescription": [""],
            "productPrice": [""],
            "productStock": [""],
            "productCategory": [""],
        });
    }
    FormComponent.prototype.onSubmit = function (value) {
        this.resultReady = false;
        console.log(JSON.stringify(value));
        this.productId = this.getProductId();
        this.resultReady = true;
    };
    FormComponent.prototype.getProductId = function () {
        return Math.floor(Math.random() * 999999);
    };
    FormComponent = __decorate([
        angular2_1.Component({
            selector: 'product-create'
        }),
        angular2_1.View({
            directives: [angular2_2.FORM_DIRECTIVES, angular2_2.NgIf],
            template: "\n\t<div class=\"col-lg-6\">\n\t\t<h2>Products - Create Product </h2>\n\t\t<form [ng-form-model]=\"productForm\"\n\t\t\t\t(submit)=\"onSubmit(productForm.value)\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"nameInput\">Product Name</label>\n\t\t\t\t<input type=\"text\"  \n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"nameInput\"\n\t\t\t\t\tplaceholder=\"Product Name\"\n\t\t\t\t\t[ng-form-control]=\"productForm.controls['productName']\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"descriptionInput\">Description</label>\n\t\t\t\t<input type=\"text\"  \n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"descriptionInput\"\n\t\t\t\t\tplaceholder=\"tell me about your product .....\"\n\t\t\t\t\t[ng-form-control]=\"productForm.controls['productDescription']\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"priceInput\">Price</label>\n\t\t\t\t<input type=\"text\"  \n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"priceInput\"\n\t\t\t\t\tplaceholder=\"Price of Product in Rupeers\"\n\t\t\t\t\t[ng-form-control]=\"productForm.controls['productPrice']\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"stockInput\">Stock in Quanity</label>\n\t\t\t\t<input type=\"text\"  \n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"stockInput\"\n\t\t\t\t\tplaceholder=\"How many products available\"\n\t\t\t\t\t[ng-form-control]=\"productForm.controls['productStock']\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"categoryInput\">Category</label>\n\t\t\t\t<input type=\"text\"  \n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"categoryInput\"\n\t\t\t\t\tplaceholder=\"Which category product belongs to\"\n\t\t\t\t\t[ng-form-control]=\"productForm.controls['productCategory']\">\n\t\t\t</div>\n\t\t\t\n\t\t\t<button type=\"submit\" class=\"btn btn-default\">Submit</button>\n\t\t</form>\n\t\t<div *ng-if=\"resultReady\" class=\"alert alert-success\" role=\"alert\">Product Saved Successfully. Product Id : {{productId}}</div>\n\t</div>"
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder])
    ], FormComponent);
    return FormComponent;
})();
exports.FormComponent = FormComponent;
//# sourceMappingURL=FormComponent.js.map