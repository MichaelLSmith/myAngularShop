app.controller('EditProduct',EditProduct);

function EditProduct(productService,products){
    // this.location = $location;
    // this.productId = $routeParams.productId;

    //services
    this.productService = productService;
    this.products = products;
    console.log(this.products);

}

// EditProduct.prototype.editProduct = function(){

// }