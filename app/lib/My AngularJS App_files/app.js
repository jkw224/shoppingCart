'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.cart',
  'myApp.reviewOrder',
  'myApp.paymentInfo',
  'myApp.orderComplete'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/cart'});
}]);
