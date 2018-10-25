"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _accessTime = _interopRequireDefault(require("react-icons/lib/md/access-time"));

var _moment = _interopRequireDefault(require("moment"));

var _NumPad = _interopRequireDefault(require("./NumPad"));

var _elements = require("../elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validation = function validation() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length === 4;
};

var formatInputValue = function formatInputValue(value) {
  return value.toString().replace(/\D+/g, '');
};

var keyValid = function keyValid() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var key = arguments.length > 1 ? arguments[1] : undefined;
  if (value.length === 4 || key === '-' || key === '.') return false;
  var time = value + key + '0'.repeat(3 - value.length);
  return (0, _moment.default)(time, 'HHmm').isValid();
};

var displayRule = function displayRule() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var newValue = value + '_'.repeat(4 - value.length);
  var splitValue = newValue ? [newValue.substr(0, 2), newValue.substr(2, 4)] : '';
  return newValue.length > 1 ? splitValue.join(':') : splitValue;
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