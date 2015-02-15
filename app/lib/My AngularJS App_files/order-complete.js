'use strict';

angular.module('myApp.orderComplete', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	
  $routeProvider.when('/order-complete', {
    templateUrl: 'order-complete/order-complete.html',
    controller: 'orderComplete'
  });

}])

.controller('orderComplete', [function() {

}]);