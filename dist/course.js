"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./App.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Course() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card-container",
    id: "educational card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card",
    id: "educational"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: `${process.env.PUBLIC_URL}/images/system.gif`,
    alt: "System Design",
    className: "card-img"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "System Design"), /*#__PURE__*/_react.default.createElement("p", null, "Learn how to design scalable systems."), /*#__PURE__*/_react.default.createElement("button", {
    className: "exp"
  }, "Explore")), /*#__PURE__*/_react.default.createElement("div", {
    className: "card",
    id: "educational"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: `${process.env.PUBLIC_URL}/images/dsa.gif`,
    alt: "dsa",
    className: "card-img"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Data Structures & Algorithms"), /*#__PURE__*/_react.default.createElement("p", null, "Master the fundamentals of DSA."), /*#__PURE__*/_react.default.createElement("button", {
    className: "exp"
  }, "Explore")), /*#__PURE__*/_react.default.createElement("div", {
    className: "card",
    id: "educational"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: `${process.env.PUBLIC_URL}/images/playlist.gif`,
    alt: "playlist",
    className: "card-img"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Playlist"), /*#__PURE__*/_react.default.createElement("p", null, "Your curated list of learning resources."), /*#__PURE__*/_react.default.createElement("button", {
    className: "exp"
  }, "Explore")), /*#__PURE__*/_react.default.createElement("div", {
    className: "card",
    id: "educational"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: `${process.env.PUBLIC_URL}/images/oops.gif`,
    alt: "Oops",
    className: "card-img"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Object-Oriented Programming"), /*#__PURE__*/_react.default.createElement("p", null, "Explore the principles of OOP."), /*#__PURE__*/_react.default.createElement("button", {
    className: "exp"
  }, "Explore")), /*#__PURE__*/_react.default.createElement("div", {
    className: "card",
    id: "educational"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: `${process.env.PUBLIC_URL}/images/sheet.gif`,
    alt: "Sheet",
    className: "card-img"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Cheat Sheet"), /*#__PURE__*/_react.default.createElement("p", null, "Quick reference for key concepts."), /*#__PURE__*/_react.default.createElement("button", {
    className: "exp"
  }, "Explore")), /*#__PURE__*/_react.default.createElement("div", {
    className: "card",
    id: "educational"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: `${process.env.PUBLIC_URL}/images/os.gif`,
    alt: "OS",
    className: "card-img"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Operating Systems"), /*#__PURE__*/_react.default.createElement("p", null, "Understand the core concepts of OS."), /*#__PURE__*/_react.default.createElement("button", {
    className: "exp"
  }, "Explore")));
}
var _default = exports.default = Course;