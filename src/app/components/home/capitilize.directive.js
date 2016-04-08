export default class esCapitilize {
  construtor () {
    return {
      restrict: 'A'
    };
  }

  link (scope, element) {
    element.html(toTitleCase(element.html()));
  }
}

function toTitleCase (str) {
  return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};
