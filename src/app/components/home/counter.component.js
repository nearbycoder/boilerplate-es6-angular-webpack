import templateUrl from 'home/counter.html';

class controller {
  constructor ($scope) {
    'ngInject';
    $scope.$watch(angular.bind(this, function () {
      return this.repos;
    }), (newValue, oldValue) => {
      if (newValue !== oldValue && angular.isArray(newValue)) {
        this.count = this.repos.length;
      }
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
