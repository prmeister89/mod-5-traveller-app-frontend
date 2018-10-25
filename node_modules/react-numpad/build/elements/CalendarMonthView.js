"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _CalendarUI = require("./CalendarUI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* eslint-disable react/no-array-index-key */
var MonthView = function MonthView(_ref) {
  var locale = _ref.locale,
      handleChangeMonth = _ref.handleChangeMonth;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_CalendarUI.Header, null), _react.default.createElement(_CalendarUI.TwelveGrid, null, Array(12).fill().map(function (_, i) {
    return _react.default.createElement(_CalendarUI.TwelveGridItem, {
      onClick: function onClick() {
        return handleChangeMonth(i);
      },
      key: "month-".concat(i)
    }, (0, _moment.default)({
      month: i
    }).locale(locale).format('MMMM'));
  })));
};

MonthView.propTypes = {
  handleChangeMonth: _propTypes.default.func.isRequired,
  locale: _propTypes.default.string.isRequired // eslint-disable-line react/forbid-prop-types

};
var _default = MonthView;
exports.default = _default;