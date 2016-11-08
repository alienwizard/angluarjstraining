'use strict'

//project index file
import angular from 'angular';
import ngAnimate from 'angular-animate'
import uirouter from 'angular-ui-router';

import _ from 'lodash';
import skillsEdit from './app/skills/edit/skill-edit'
import skillsCreate from './app/skills/create/skill-create'
import skills from './app/skills/skills'

//Stylesheets
import './scss/style.scss';

angular.module('SkillsApp', [
  'ui.router',
  'skills',
  'ngAnimate'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('skillsapp', {
        url:'',
        abstract:true
      })
      $urlRouterProvider.otherwise('/');
  })
