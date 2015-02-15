'use strict';

angular.module('myApp.paymentInfo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	
  $routeProvider.when('/payment-info', {
    templateUrl: 'payment-info/payment-info.html',
    controller: 'paymentInfo'
  });

}])

.controller('paymentInfo', [function() {

}]);