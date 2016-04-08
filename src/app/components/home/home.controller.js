export default class HomeController {
  constructor (githubService) {
    'ngInject';

    githubService.getRepos({username: 'nearbycoder'}).$promise.then(results => {
      this.repos = results;
    });
  }

}
