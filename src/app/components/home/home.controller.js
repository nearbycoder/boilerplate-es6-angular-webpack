export default class HomeController {
  constructor (githubService) {
    'ngInject';

    githubService.getRepos().$promise.then(results => {
      this.repos = results;
    });
  }

}
