app.controller('cartCtrl',CartCtrl);

function CartCtrl(productService,$location,products){
    this.location = $location;

    //services
    this.productService = productService;
    this.products = products;

}

/*Function to add product objects to cart array


*/

CartCtrl.prototype.addToCart = (){
    
    var cart = [];
}