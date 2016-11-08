'use strict';
import skillModel from '../models/skills.model'

console.log(skillModel);

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

    skills.getSkills()
      .then(function (result){
        $scope.skills = result;
      });

          console.log(skills)

  })
  .name
