export default class GitHubService {
  constructor ($resource) {
    'ngInject';
    var githubService = $resource(
      'https://api.github.com/users/:username/repos',
      {},
      {
        'getRepos': {
          method: 'GET',
          isArray: true
        }
      }
    );

    return githubService;
  }
};
