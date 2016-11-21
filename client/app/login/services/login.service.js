(function() {
	'use strict';

	angular.module('zxlApp')
		.service('LoginSer', function($http, socket, $q) {
		
		console.log("ser  ---------");
		this.createTal = function(data) {
			var deffer = $q.defer();
			$http({
				method: 'post',
    			url: '/api/login',
    			params: {name:'zxl11'}
			}).success(function(successData) {
				deffer.resolve(successData);
			}).error(function(errorData) {
				deffer.resolve(successData);
			})

			return deffer.promise;
		};			
			
		});
})();