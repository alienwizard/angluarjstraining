//Angular index file

import angular from 'angular';

console.log('fired')

export default angular.module('Ratings', [

])
.controller('MainCtrl', function($scope) {
  $scope.hello = 'world'
})
