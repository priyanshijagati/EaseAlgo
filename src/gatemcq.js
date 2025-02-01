import React, { useState, useEffect } from "react";
import "./gatemcq.css";
import Particle from "./particle";
import { gsap } from "gsap";

const GateMCQ = () => {
  const [filterQuery, setFilterQuery] = useState("");

  const mcqData = [
    { topic: "Mathematics", link: "./maths" },
    { topic: "Data Structures", link: "./mcq" },
    { topic: "Algorithms", link: "./algo" },
    { topic: "Operating Systems", link: "/mcqs/operating-systems.pdf" },
    { topic: "Computer Networks", link: "/mcqs/computer-networks.pdf" },
    { topic: "Compiler Design", link: "/mcqs/compiler-design.pdf" },
    { topic: "DBMS", link: "/mcqs/dbms.pdf" },
    { topic: "General Aptitude", link: "/mcqs/general-aptitude.pdf" },
  ];

  const filteredMCQs = mcqData.filter((mcq) =>
    mcq.topic.toLowerCase().includes(filterQuery.toLowerCase())
  );



  useEffect(() => {
    gsap.fromTo(
      ".gatemcq-header",
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1 } 
    );
  }, []);
  

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="logo">EaseAlgo</div>
        <ul className="nav-links">
          <li>
            <a href="/EaseAlgo">
              Home
            </a>
          </li>
          <li>
            <a href="/EaseAlgo" >
              Course
            </a>
          </li>
          <li>
            <a href="./about" >
              About Us
            </a>
          </li>
          <li>
            <a href= "/EaseAlgo" >
              Mentor
            </a>
          </li>
          <li>
            <button className=""></button>
          </li>
        </ul>
      </nav>
      <Particle />

      <div className="mcq-content">
        <header className="mcq-header" id="home">
          <h1>Test Your Knowledge</h1>
          <p>Answer the following questions to challenge your skills! 🎉</p>
        </header>
      </div>

      <div className="gatemcq-container">
        <header className="gatemcq-header">
          <h1 className="gatemcq-title">GATE MCQs</h1>
          <p className="gatemcq-description">
            Explore and start practicing curated GATE MCQs for all topics.
          </p>
        </header>

        <div className="gatemcq-search-bar">
          <input
            type="text"
            placeholder="Search for a topic..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="gatemcq-input"
          />
        </div>

        <div className="gatemcq-list">
          {filteredMCQs.length > 0 ? (
            filteredMCQs.map((mcq, index) => (
              <div key={index} className="gatemcq-card">
                <h3 className="gatemcq-card-title">{mcq.topic}</h3>
                <a href={mcq.link} className="gatemcq-practice-button" rel="noopener noreferrer">
                  Start Practicing
                </a>
              </div>
            ))
          ) : (
            <p className="gatemcq-no-results">No results found for "{filterQuery}".</p>
          )}
        </div>
      </div>
    </>
  );
};

export default GateMCQ;