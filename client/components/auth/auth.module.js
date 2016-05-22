'use strict';

angular.module('blackmarketApp.auth', ['blackmarketApp.constants', 'blackmarketApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
