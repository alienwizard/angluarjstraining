import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../services/randomNames.service';
import greeting from '../directives/greeting.directive';

console.log(randomNames);

export default angular.module('appHome', [uirouter, randomNames, greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;