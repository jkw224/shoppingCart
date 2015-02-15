var BASE_URL = 'http://stacked.us:7890/'

angular.module('myApp.apiService', [])
	.service('apiService', function($http) {
		this.getProductList = function(callback) {
			$http({
				url: BASE_URL + 'product_list',
				method: 'GET'
			})
			.success(function(responseData) {
				return callback(responseData);
			})
			.error(function(error) {
				return callback(error);
			});
		};

		// this.updateThisIsAGift = function(callback) {
		// 	$http.post(BASE_URL + 'update_product', requestData, {
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		}
		// 	})
		// 	.success(function(responseData) {
		// 		'error': false,
		// 		'status', 2000,
		// 		'statusText': 'Product updated successfully'
		// 	})
		// 	.error(function(err) {
		// 		'error': true,
		// 		'status': 6002,
		// 		'statusText': 'Product id not found'
		// 	})
		// };

});