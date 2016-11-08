'use strict';
import skillModel from '../models/skills.model'

//Huvudmodul för färdigheterna
export default angular.module('skills', [
  'skills.edit',
  'skills.create',
  'skillsApp.models.skills'
])
  .config(function($stateProvider){
    $stateProvider
      .state('skillsapp.skills', {
        url: '/',
        views: {
          'skills@': {
            controller: 'skillsCtrl',
            templateUrl: 'src/app/skills/skills.tmpl.html'
          }
        }

      })
  })
  .controller('skillsCtrl', function skillsCtrl($scope, skills){
    $scope.getCurrentSkillName = skills.getCurrentSkillName;

    //Hämta färdigheter från skillmodel och gör datan tillgänglig för $scope
    skills.getSkills()
      .then(function (result){
        $scope.skills = result;
      });



  })
  .name
