'use strict';

angular.module('zxlApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/login/templates/login.html',
                controller: 'LoginCtrl'
            });
    });
