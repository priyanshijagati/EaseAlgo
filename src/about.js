import React from "react";
import "./about.css";

import Particle from "./particle";
const AboutUs = () => {


  return (
    <>
    <div className="page-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">EaseAlgo</div>
        <ul className="nav-links">
          <li><a href="/EaseAlgo" >Home</a></li>
          <li><a href="/EaseAlgo" >Course</a></li>
          <li><a href="./about" >About Us</a></li>
          <li><a href="/EaseAlgo" >Mentor</a></li>
          <li>
            <button></button>

          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="about-us-container">
        {/* Header */}
        <div className="about-us-header">
          <h1>Welcome to EaseAlgo</h1>
          <p>Your one-stop destination for mastering the GATE exam!</p>
        </div>

        {/* Syllabus Section */}
        <div  className="syllabus-section">
          <h2>GATE Exam Syllabus</h2>
          <p>Comprehensive coverage of all topics for GATE including:</p>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Object-Oriented Programming</li>
            <li>Operating Systems</li>
            <li>Problem-Solving Techniques</li>
          </ul>
        </div>

        {/* Subjects Section */}
        <div  className="subjects-section">
          <h2>Practise MCQ's</h2>
          <div className="subject-buttons">
            <button> <a href="./mcq"  rel="noopener noreferrer">Data Structures & Algorithms </a></button>
            <button> <a href="./maths"  rel="noopener noreferrer">Mathematics</a></button>
            <button> <a href="./algo"  rel="noopener noreferrer">Algorithms </a></button>
            <button> <a href="./notes"  rel="noopener noreferrer">Operating Systems </a></button>
            <button> <a href="./notes"  rel="noopener noreferrer">Computer Networks </a></button>
          </div>
        </div>

        {/* MCQs Section */}
        <div  className="mcqs-section">
          <h2>Revise Notes</h2>
          <p>Boost your preparation with topic-wise notes:</p>
          <button className="mcq-button"> <a href="./notes" rel="noopener noreferrer">Start Practicing </a></button>
        </div>

        {/* About the Mentor */}
        <div  className="mentor-section">
          <h2>About the Mentor</h2>
          <div className="mentor-content">
            <img src={`${process.env.PUBLIC_URL}/images/mentor.jpg`} alt="instructor-img" className="mentor-image" />
            <p>
            I am the founder of EaseAlgo and currently working at DRDO. I was an ICPC Regionalist in 2023 and have experience as a MERN stack web developer. I have a strong interest in Quantum Computing, particularly using Qiskit, and have published six research papers. Additionally, I am actively engaged on platforms like LeetCode and HackerRank to refine my coding skills.
              
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
        <p> <a href="https://www.linkedin.com/in/priyanshi-jagati-776888233/" target='blank'> © 2024 EaseAlgo. All rights reserved. </a></p>
          <p> Contact us: pro.shaurya010@gmail.com | +91 7652084437</p>
        </footer>
      </div>
    </div>
    <Particle/>
    </>
  );
};

export default AboutUs;
