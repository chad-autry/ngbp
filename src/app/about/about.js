var angular = require('angular');
var template = require("./about.tpl.html");
var ui_router = require('angular-ui-router');
var ui_bootstrap_dropdown = require('ui.bootstrap.dropdown');
module.exports = angular.module( 'ngBoilerplate.about', [
  ui_router,
  ui_bootstrap_dropdown,
  template.name
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
