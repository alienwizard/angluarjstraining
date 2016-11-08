'use strict'

//project index file
import angular from 'angular';
import uirouter from 'angular-ui-router';

import skillsEdit from './app/skills/edit/skill-edit'
import skillsCreate from './app/skills/create/skill-create'
import skills from './app/skills/skills'

//Stylesheets
import './scss/style.scss';
console.log(skillsCreate);
/*
angular.module('app', ['ui.router', 'appHome'])
  .config(routing);
*/
angular.module('SkillsApp', [
  'ui.router',
  'skills',
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('skillsapp', {
        url:'',
        abstract:true
      })
      $urlRouterProvider.otherwise('/');
  })
