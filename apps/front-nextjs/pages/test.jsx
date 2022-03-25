'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Test = void 0;
var swr_1 = require('swr');
var shared_1 = require('../shared');
function Test() {
  var _a = (0, swr_1.default)(
      ''.concat(process.env.NEXT_PUBLIC_ROOT_HOST, '/api/data'),
      shared_1.fetcher
    ),
    data = _a.data,
    error = _a.error;
  if (error) {
    return <>{error}</>;
  }
  return (
    <>
      <div>{data === null || data === void 0 ? void 0 : data.value}</div>
    </>
  );
}
exports.Test = Test;
exports.default = Test;
