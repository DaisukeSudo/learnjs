'use strict';
const learnjs = {};

learnjs.problemView = (problemNumber) => {
  const title = 'Problem #' + problemNumber + ' Coming soon!';
  return $('<dic class="problem-view">').text(title);
}

learnjs.showView = (hash) => {
  const routes = {
    '#problem': learnjs.problemView
  };
  const hashParts = hash.split('-');
  const viewFn = routes[hashParts[0]];
  if (viewFn) {
    $('.view-container').empty().append(viewFn(hashParts[1]));
  }
};
