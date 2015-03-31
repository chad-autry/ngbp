'use strict';

var angular = require('angular'),
    ui_router = require('angular-ui-router'),
    app_home = require('./home/home'),
    app_about = require('./about/about'),
    ui_bootstrap_collapse =  require('ui.bootstrap.collapse');

module.exports = angular.module( 'ngBoilerplate', [
  app_home.name,
  app_about.name,
  ui_router,
  ui_bootstrap_collapse
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;

