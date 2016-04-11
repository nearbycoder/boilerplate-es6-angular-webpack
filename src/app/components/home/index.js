import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routing from './home.routes.js';
import HomeController from './home.controller.js';
import esCapitalize from './capitalize.directive.js';
import esCounter from './counter.component.js';
import GithubService from './github.service.js';

export default angular.module('app.home', [uirouter, ngResource])
  .config(routing)
  .controller('HomeController', HomeController)
  .directive('esCapitalize', () => new esCapitalize())
  .component('esCounter', esCounter)
  .service('githubService', GithubService)
  .name;
