'use strict';

angular.module('zxlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/home/home.html',
        controller: 'HomeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/about/about.html',
        controller: 'AboutCtrl'
      });
  });