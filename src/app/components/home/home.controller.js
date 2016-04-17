export default class HomeController {
  constructor (githubService) {
    'ngInject';
    this.githubService = githubService;
    this.repos = this.githubService.getRepos({username: 'nearbycoder'});
  }
}
