import angular from 'angular';
import uirouter from 'angular-ui-router';


//import dependencies
import ratingsService from './ratings.service.js'
import RatingsController from './ratings.controller';

console.log(ratingsService);
export default angular.module('skillsApp', [ratingsService, uirouter, skills])
  .config( function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('skillsTable', {
        url:'',
        abstract:true
      })
      ;
      urlRouterProvider.otherwise('/');
  })
  .name;
