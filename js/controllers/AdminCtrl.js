app.controller('AdminCtrl',AdminCtrl);

function AdminCtrl(productService,$location,products){
	self = this;
    this.$location = $location;

	//services
	this.productService = productService;
	this.products = products;
	console.log(this.products);

}

// AdminCtrl.prototype.changeId = function(id){
//    console.log('changeID');
//     this.location.path('edit_product/'+ id);
// }

AdminCtrl.prototype.logout = function(){
    localStorage.removeItem('products');
    localStorage.removeItem('authToken');
    self.$location.path('/login');
}
