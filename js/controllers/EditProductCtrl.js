app.controller('EditProduct',EditProduct);

function EditProduct(productService,products,$location,$routeParams){
    this.location = $location;
    this.productId = $routeParams.productId;
    
    //services
    this.productService = productService;
    this.products = products;
    console.log(this.products);
    console.log(this.productId);
    this.product = this.getProduct(this.productId)

}

EditProduct.prototype.getProduct = function(id) {
    console.log('getProduct');
  return this.products.filter(function(product) {
    return product.productId === id})[0];
  //loops through the entire localStorage.products array. It then puts all the objects into a new array that fit the requirements that equal the 'id'. This will only ever return one object. the [0] sercurity buffer. If more than one product has the same id, it will only put the first product with the id into the array.
}

EditProduct.prototype.printProduct = function(){
    console.log('printProduct');
    console.log(product.productId);
}

EditProduct.prototype.editProduct = function(){

}