'use strict';

/* Controllers */


function SwitchListCtrl($scope, $http, Switch) {

  $scope.switches = Switch.query();

  $scope.turnSwitchOn = function (id) {
    Switch.turnOn(id)
  };

  $scope.turnSwitchOff = function (id) {
    Switch.turnOff(id)
  };

}


