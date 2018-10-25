"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _accessTime = _interopRequireDefault(require("react-icons/lib/md/access-time"));

var _NumPad = _interopRequireDefault(require("./NumPad"));

var _date = _interopRequireDefault(require("../utils/date"));

var _elements = require("../elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validation = function validation() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length === 8;
};

var formatInputValue = function formatInputValue(value) {
  return value.toString().replace(/\D+/g, '');
};

var keyValid = function keyValid() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var key = arguments.length > 1 ? arguments[1] : undefined;
  var dateFormat = arguments.length > 2 ? arguments[2] : undefined;
  if (value.length === 8 || key === '-' || key === '.') return false;
  return _date.default.validate(value, key, dateFormat);
};

var displayRule = function displayRule() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var dateFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MM/DD/YYYY';
  return _date.default.display(value, dateFormat);
};

var inputButtonContent = _react.default.createElement(_accessTime.default, null);

var _default = (0, _NumPad.default)({
  element: _elements.KeyPad,
  validation: validation,
  formatInputValue: formatInputValue,
  displayRule: displayRule,
  inputButtonContent: inputButtonContent,
  keyValid: keyValid
});

exports.default = _default;