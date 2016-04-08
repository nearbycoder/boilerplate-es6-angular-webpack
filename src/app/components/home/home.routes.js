import templateUrl from 'home/home.html';

export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('base', {
      url: '/',
      views: {
        'body@': {
          templateUrl,
          controller: 'HomeController',
          controllerAs: '$ctrl',
          bindToController: true
        }
      }
    });
};
