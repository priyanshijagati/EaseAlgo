"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./mcq.mjs");
require("./App.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function handleSmoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").slice(1); // Remove the "#" from the href
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}
function App() {
  const [selectedCourse, setSelectedCourse] = (0, _react.useState)(null);
  const handleDropdownChange = event => {
    setSelectedCourse(event.target.value);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar",
    id: "navbar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo"
  }, "EduTech"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav-links"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home",
    onClick: handleSmoothScroll
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#courses",
    onClick: handleSmoothScroll
  }, "Course")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#about-us",
    onClick: handleSmoothScroll
  }, "About Us")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#mentor",
    onClick: handleSmoothScroll
  }, "Mentor")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "login-button"
  }, "Login")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tagline",
    id: "home"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tagline-content"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "tagline-title"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "tagline-red"
  }, "Empower"), " Your Learning ", /*#__PURE__*/_react.default.createElement("span", {
    className: "tagline-red"
  }, "Journey")), /*#__PURE__*/_react.default.createElement("p", {
    className: "tagline-subtitle"
  }, "Unlock your potential with our expertly crafted courses"), /*#__PURE__*/_react.default.createElement("button", {
    className: "explore-button"
  }, "Explore Courses"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-container",
    id: "courses"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: `${process.env.PUBLIC_URL}/images/system.gif`,
    alt: "System Design",
    className: "card-img"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "GATE"), /*#__PURE__*/_react.default.createElement("p", null, "Learn how to design scalable systems."), /*#__PURE__*/_react.default.createElement("select", {
    value: selectedCourse,
    onChange: handleDropdownChange,
    className: "course-dropdown"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select Course"), /*#__PURE__*/_react.default.createElement("option", {
    value: "GATE MCQ's"
  }, "GATE MCQ's"), /*#__PURE__*/_react.default.createElement("option", {
    value: "GATE Notes"
  }, "GATE Notes"))), /*#__PURE__*/_react.default.createElement("div", {
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
  }, "Explore"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "why-choose-us",
    id: "about-us"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Why Choose Us ", /*#__PURE__*/_react.default.createElement("span", {
    className: "tagline-red"
  }, "?"), " "), /*#__PURE__*/_react.default.createElement("h3", null, "Unlock Your Potential with Our Comprehensive Learning Approach"), /*#__PURE__*/_react.default.createElement("div", {
    className: "reasons-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "reason-card",
    id: "educational"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "01"), /*#__PURE__*/_react.default.createElement("h3", null, "Expert Instructors"), /*#__PURE__*/_react.default.createElement("p", null, "Our courses are taught by industry experts with years of experience. Our team of accomplished engineers, with impressive coding profiles across various programming platforms, hails from top tech companies like Google, Amazon, Meta, and Microsoft. They also boast a proven track record of successful teaching.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "reason-card",
    id: "educational"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "02"), /*#__PURE__*/_react.default.createElement("h3", null, "Comprehensive Curriculum"), /*#__PURE__*/_react.default.createElement("p", null, "We offer a wide range of courses covering all essential topics.Master Data Structures & Algorithms (DSA), System Design, core subjects, and practical projects \u2013 all through premium blog posts and in-depth video solutions.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "reason-card",
    id: "educational"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "03"), /*#__PURE__*/_react.default.createElement("h3", null, "Flexible Learning"), /*#__PURE__*/_react.default.createElement("p", null, "Learn at your own pace with our self-paced and interactive courses. We prioritize quality content, offering in-depth explanations and a wider range of solved problems in both free and paid courses. Our focus is on developing problem-solving skills through intuitive video explanations.")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "instructor-section",
    id: "mentor"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "instructor-title"
  }, "Meet Our ", /*#__PURE__*/_react.default.createElement("span", {
    className: "tagline-red"
  }, "Exceptional "), " Instructor"), /*#__PURE__*/_react.default.createElement("div", {
    className: "instructor-content"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: `${process.env.PUBLIC_URL}/images/mentor.jpeg`,
    alt: "instructor-img",
    className: "instructor-img"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "instructor-details"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "instructor-info"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: `${process.env.PUBLIC_URL}/images/mentor.jpeg`,
    alt: "instructor-img",
    className: "instructor-photo"
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "instructor-name"
  }, "Shaurya Pratap Singh"), /*#__PURE__*/_react.default.createElement("p", {
    className: "instructor-role"
  }, "Founder EduTech"))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "instructor-qualifications"
  }, /*#__PURE__*/_react.default.createElement("li", null, "Working @ DRDO"), /*#__PURE__*/_react.default.createElement("li", null, "ICPC Regionalist '23"), /*#__PURE__*/_react.default.createElement("li", null, "Web Developer (MERN)"), /*#__PURE__*/_react.default.createElement("li", null, "Quantum Computing (Qiskit)")), /*#__PURE__*/_react.default.createElement("div", {
    className: "social-icons"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.youtube.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-youtube"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.twitter.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-twitter"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.instagram.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-instagram"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.linkedin.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-linkedin"
  })))))), /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-section"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "footer-title"
  }, "EduTech"), /*#__PURE__*/_react.default.createElement("p", null, "The best place to learn Data Structures, algorithms, most asked coding interview questions. Real interview experiences free of cost."), /*#__PURE__*/_react.default.createElement("div", {
    className: "social-icons"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.youtube.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-youtube"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.twitter.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-twitter"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.instagram.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-instagram"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.linkedin.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-linkedin"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-section"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "footer-title"
  }, "Company"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "footer-links"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "About Us")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "Contact Us")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "Pricing")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "Privacy Policy")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "Terms and Conditions")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "Cancellation / Refund Policy")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-section"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "footer-title"
  }, "Quick Access"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "footer-links"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "DSA Sheet")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "DSA Playlist")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "CS Subjects")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "CN Notes")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-section"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "footer-title"
  }, "DSA Sheets"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "footer-links"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "SDE Sheet")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "Algorithms")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "SDE Core Sheet")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "CP Sheet")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-section"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "footer-title"
  }, "DSA Playlist"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "footer-links"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "Array Series")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "Graph Series")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "DP Series")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "LinkedList Series"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/_react.default.createElement("p", null, " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.linkedin.com/in/priyanshi-jagati-776888233/"
  }, " \xA9 2024 EduTech. All rights reserved. ")))));
}
var _default = exports.default = App;