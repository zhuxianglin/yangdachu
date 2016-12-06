(function() {
	'use strict';

	angular.module('zxlApp')
		.service('LoginSer', function($http, $q) {

		console.log("ser  ---------");
		this.createTal = function(data) {
			var deffer = $q.defer();
			$http({
				method: 'post',
    			url: '/api/login',
    			params: data
			}).success(function(successData) {
				deffer.resolve(successData);
			}).error(function(errorData) {
				deffer.resolve(errorData);
			})

			return deffer.promise;
		};

		});
})();
