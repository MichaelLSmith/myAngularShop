app.controller('CartCtrl',CartCtrl);

function CartCtrl(ordersService){
    this.ordersService = ordersService;
    this.cart = ordersService.cart;
    //services

}

CartCtrl.prototype.viewContents = function(){
    console.log(this.cart);
}

