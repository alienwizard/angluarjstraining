'use strict'

//project index file
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './app/modules';

console.log(home);

//Stylesheets
import './scss/style.scss';

angular.module('app', ['ui.router', 'appHome'])
  .config(routing);
