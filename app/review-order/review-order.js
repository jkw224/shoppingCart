'use strict';

angular.module('myApp.reviewOrder', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	
  $routeProvider.when('/review-order', {
    templateUrl: 'review-order/review-order.html',
    controller: 'reviewOrder'
  });

}])

.controller('reviewOrder', [function() {

}]);