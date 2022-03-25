'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.fetcher = void 0;
var fetcher = function (url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
};
exports.fetcher = fetcher;
