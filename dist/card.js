"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Card = _ref => {
  let {
    title,
    image,
    description
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: title,
    className: "card-img"
  }), /*#__PURE__*/_react.default.createElement("h3", null, title), /*#__PURE__*/_react.default.createElement("p", null, description), /*#__PURE__*/_react.default.createElement("button", {
    className: "explore-button"
  }, "Explore"));
};
var _default = exports.default = Card;