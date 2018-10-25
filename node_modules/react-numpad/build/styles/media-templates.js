"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = exports.media = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", "em) {\n      ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = {
  desktop: 4000,
  mobile: 415
}; // iterate through the sizes and create a media template

var media = Object.keys(sizes).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var emSize = sizes[label] / 16;

  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject(), emSize, _styledComponents.css.apply(void 0, arguments));
  };

  return accumulator;
}, {});
exports.media = media;

var isMobile = function isMobile() {
  var mobile = window.matchMedia("(max-width: ".concat(sizes.mobile, "px)")); // const desktop = window.matchMedia(`(max-width: ${sizes.desktop}px)`);

  return mobile.matches;
};

exports.isMobile = isMobile;