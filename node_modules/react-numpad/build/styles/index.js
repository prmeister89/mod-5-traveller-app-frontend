"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _numpad = _interopRequireDefault(require("./themes/numpad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(name) {
  var themes = {
    numpad: _numpad.default
  };
  return themes[name] || _numpad.default;
};

exports.default = _default;