'use strict';

angular.module('myApp.cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider
  	.when('/cart', {
    	templateUrl: 'cart/cart.html',
    	controller: 'cartCtrl'
  });

}])

.controller('cartCtrl', function($scope, dataService, apiService) {
	//itemsQuantity array
	apiService.getProductList(function(httpResponse) {
		$scope.products = httpResponse;	
		console.log(httpResponse);
		$scope.orderTotal();
		console.log($scope.orderTotal());

	});

	$scope.orderTotal = function() {
		$scope.numItems();
		var total = 0;
		for(var i = 0; i < $scope.products.length; i++){
			var productiTotal = $scope.products[i].price * $scope.products[i].quantity;
			total += parseFloat(productiTotal);
		};
		$scope.subTotal = total.toFixed(2); 
	};

	$scope.numItems = function() {
		var total = 0;
		for(var i = 0; i < $scope.products.length; i++){
			var quantityTotal = $scope.products[i].quantity;
			total += parseInt(quantityTotal);
		};
		$scope.itemCount = total;
	};
	
	// $scope.deleteFunction = function () {

	// }

});
