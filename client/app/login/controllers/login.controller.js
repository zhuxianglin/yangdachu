(function() {
    'use strict';

    angular.module('zxlApp')
        .controller('LoginCtrl', function($scope, $http, socket, LoginSer) {

            var data = {
                'name': 'zxl'
            };
            LoginSer.createTal(data).then(function(_d) {
                $scope.datas = _d;
            });
        });
})();
