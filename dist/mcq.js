"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Mcq = _ref => {
  let {
    questions
  } = _ref;
  const [currentQuestionIndex, setCurrentQuestionIndex] = (0, _react.useState)(0);
  const [selectedOption, setSelectedOption] = (0, _react.useState)(null);
  const [feedback, setFeedback] = (0, _react.useState)('');
  const handleOptionChange = option => {
    setSelectedOption(option);
  };
  const handleSubmit = () => {
    // Logic for handling submission can go here
    // For example, you could check if the selected option is correct
    setFeedback('Your answer has been submitted.');
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
      setFeedback('');
    } else {
      setFeedback('This was the last question.');
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "mcq-container"
  }, /*#__PURE__*/_react.default.createElement("h2", null, questions[currentQuestionIndex].question), /*#__PURE__*/_react.default.createElement("div", {
    className: "options"
  }, questions[currentQuestionIndex].options.map((option, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "option"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    id: option,
    name: "mcq",
    value: option,
    checked: selectedOption === option,
    onChange: () => handleOptionChange(option)
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: option
  }, option)))), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleSubmit,
    className: "explore-button"
  }, "Submit"), feedback && /*#__PURE__*/_react.default.createElement("p", {
    className: "feedback"
  }, feedback), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleNextQuestion,
    className: "explore-button"
  }, "Next Question")));
};
var _default = exports.default = Mcq;