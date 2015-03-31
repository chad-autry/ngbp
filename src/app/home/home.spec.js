/**
 * Tests sit right alongside the file they are testing
 */

//Require the module being tested
var testModule = require("./home.js");
//Requiring angular-mocks monkey patches the angular object with the mock methods. We already know the module under test required angular
var angular_mock = require('angular-mocks');

describe( 'home section', function() {
  beforeEach( angular.mock.module( testModule.name ) );
  beforeEach( angular.mock.inject( function( $controller, _$location_, $rootScope ) {
    $location = _$location_;
    $scope = $rootScope.$new();
    HomeCtrl = $controller( 'HomeCtrl', { $location: $location, $scope: $scope });
  }));

  it( 'should have a dummy test', angular.mock.inject( function() {
    expect( HomeCtrl ).toBeTruthy();
  }));
});

