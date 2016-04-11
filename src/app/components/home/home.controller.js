export default class HomeController {
  constructor (githubService) {
    'ngInject';
    this.githubService = githubService;
  }

  $onInit () {
    this.repos = this.githubService.getRepos({username: 'nearbycoder'});
  }
}
