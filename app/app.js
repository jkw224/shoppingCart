'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.cart',
  'myApp.reviewOrder',
  'myApp.paymentInfo',
  'myApp.orderComplete',
  'myApp.dataService',
  'myApp.apiService'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	// .when('/cart', {
  	// 	templateUrl: 'app/cart/cart.html'
  	// 	controller: 'cartCtrl'
  	// })
  	.otherwise({redirectTo: '/cart'});
}]);
