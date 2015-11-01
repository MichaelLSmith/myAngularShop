app.controller('CartCtrl',CartCtrl);

function CartCtrl(ordersService){
    this.ordersService = ordersService;
    this.cart = ordersService.cart;
    //services

}

