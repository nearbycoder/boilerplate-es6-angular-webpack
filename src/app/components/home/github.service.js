export default class GitHubService {
  constructor ($resource) {
    'ngInject';
    var githubService = $resource(
      'https://api.github.com/users/',
      {},
      {
        'getRepos': {
          method: 'GET',
          url: 'https://api.github.com/users/nearbycoder/repos',
          isArray: true
        }
      }
    );

    return githubService;
  }
};
