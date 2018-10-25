'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = undefined;

var _getUserLocale = require('get-user-locale');

var _getUserLocale2 = _interopRequireDefault(_getUserLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatterCache = {};

/**
 * Gets Intl-based date formatter from formatter cache. If it doesn't exist in cache
 * just yet, it will be created on the fly.
 */
var getFormatter = function getFormatter(options, locale) {
  if (!locale) {
    // Default parameter is not enough as it does not protect us from null values
    // eslint-disable-next-line no-param-reassign
    locale = (0, _getUserLocale2.default)();
  }

  var stringifiedOptions = JSON.stringify(options);

  if (!formatterCache[locale]) {
    formatterCache[locale] = {};
  }

  if (!formatterCache[locale][stringifiedOptions]) {
    formatterCache[locale][stringifiedOptions] = new Intl.DateTimeFormat(locale, options).format;
  }

  return formatterCache[locale][stringifiedOptions];
};

// eslint-disable-next-line import/prefer-default-export
var formatTime = exports.formatTime = function formatTime(date, locale) {
  return getFormatter({ hour: 'numeric', minute: 'numeric', second: 'numeric' }, locale)(date);
};