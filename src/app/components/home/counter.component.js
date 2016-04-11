import templateUrl from 'home/counter.html';

class controller {
  constructor () {
    this.repos.$promise.then(results => {
      this.count = results.length;
    });
  }
}

export default {
  controller,
  templateUrl,
  bindings: {
    repos: '<repos'
  }
};
