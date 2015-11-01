app.service('ordersService',OrdersService);

function OrdersService(api){
    this.api = api;
    // this.product = product
    this.cart = [];
}

/*
Cart array - When 'addToCart' button is pressed on individual products page, the product object will be added to the cart array.
*/

OrdersService.prototype.addToCart = function(product){
    this.cart.push(product);
    console.log(cart);
}

OrdersService.prototype.getCart = function(){
    console.log(this.cart);
    return this.cart;
}