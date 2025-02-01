import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MCQ from './mcq'; 
import Home from './App'
import AboutUs from './about'
import GateMCQ from './gatemcq'
import Maths from './maths'
import Algo from './algo'
import './App.css';

import GateNotes from './notes';

import Particle from "./particle";

function handleSmoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").slice(1); 
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function App() {
  
  const [showPopup, setShowPopup] = useState(false); 
  const [isLogin, setIsLogin] = useState(true); 

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <Router>
      <Routes>
        <Route
          path="/EaseAlgo"
          element={
            
            <div>
              {/* Navbar */}
              
              <nav className="navbar" id="navbar">

                
                
                <div className="logo"> <a href="#home" > EaseAlgo </a></div>
                
                

                <ul className="nav-links">
                  <li><a href="#home" onClick={handleSmoothScroll}>Home</a></li>
                  <li><a href="#courses" onClick={handleSmoothScroll}>Course</a></li>
                  <li><a href="./EaseAlgo/about" >About Us</a></li>
                  <li><a href="#mentor" onClick={handleSmoothScroll}>Mentor</a></li>
                  <li>
                    <button className="login-button" onClick={togglePopup}>Login</button>

                  </li>
                </ul>
              </nav>


              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    {/* Close Button */}
                    <button className="close-button" onClick={togglePopup}>&times;</button>

                    <div className="tab-buttons">
                      <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
                      <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Register</button>
                    </div>

                    {isLogin ? (
                      <div className="login-form">
                        <input type="email" placeholder="Email ID" />
                        <input type="password" placeholder="Password" />
                        <div className="options">
                          <label>
                            <input type="checkbox" /> Remember Me
                          </label>
                          <a href="#home">Forgot Password?</a>
                        </div>
                        <button className="submit-button">Login Now</button>
                      </div>
                    ) : (
                      <div className="register-form">
                        <input type="email" placeholder="Email ID" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button className="submit-button">Register Now</button>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <Particle/>
              

              

              {/* Tagline Section */}
              <div className="tagline" id="home">
                {/* <video
                  className="background-video"
                  autoPlay
                  muted
                  loop
                >
                  <source
                    src={`${process.env.PUBLIC_URL}/images/bgvdo4.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video> */}

                <img src={`${process.env.PUBLIC_URL}/images/backg1.jpg`} alt="playlist" className='background-video' ></img>
                
                <div className="tagline-content">
                  <h1 className="tagline-title">
                    <span className="tagline-red">Empower</span> Your Learning <span className="tagline-red">Journey</span>
                  </h1>
                  <p className="tagline-subtitle">Unlock your potential with our expertly crafted courses</p>
                  <button className="explore-button"> <a href="#courses" onClick={handleSmoothScroll}>Explore Courses </a></button>
                </div>
              </div>

              <div className="mcq-body">

              {/* Cards Section */}
              <div className="card-container" id="courses">
                <div className="card card1">
                  <img src={`${process.env.PUBLIC_URL}/images/system.gif`} alt="System Design" className="card-img" />
                  <h2>GATE MCQ's</h2>
                  <p>Learn how to design scalable systems.</p>

                  <a href="./EaseAlgo/gateMCQ" rel="noopener noreferrer">
                      <button className="exp">
                        Explore
                      </button>
                    </a>

                </div>
                <div className="card card1" id="educational">
                  <img src={`${process.env.PUBLIC_URL}/images/dsa.gif`} alt="dsa" className="card-img" />
                  <h2>  GATE Notes</h2>
                  
                  <p>Master the fundamentals of GATE</p>
                    <a href="./EaseAlgo/notes"  rel="noopener noreferrer">
                      <button className="exp">
                        Explore
                      </button>
                    </a>

                </div>
                <div className="card card1" id="educational">
                  <img src={`${process.env.PUBLIC_URL}/images/playlist.gif`} alt="playlist" className="card-img" />

                  <h2>Playlist</h2>
                  <p>Your curated list of learning resources.</p>
                    <a href="https://www.youtube.com/watch?v=dBe1EnUpBaA&list=PLC36xJgs4dxFCQVvjMrrjcY3XrcMm2GHy" target="_blank" rel="noopener noreferrer">
                      <button className="exp">
                        Explore
                      </button>
                    </a>
                </div>

                <div className="card" id="educational">
                  <img src={`${process.env.PUBLIC_URL}/images/oops.gif`} alt="Oops" className="card-img" />
                  <h2>Object-Oriented Programming</h2>
                  <p>Explore the principles of OOP.</p>
                  <a href="https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/" target="_blank" rel="noopener noreferrer">
                      <button className="exp">
                        Explore
                      </button>
                    </a>
                </div>
                <div className="card" id="educational">
                  <img src={`${process.env.PUBLIC_URL}/images/dsa.gif`} alt="dsa" className="card-img" />
                  <h2>  Data Structures & Algorithms</h2>
                  
                  <p>Master the fundamentals of DSA.</p>
                    <a href="https://www.geeksforgeeks.org/data-structures-and-algorithms-dsa-guide-for-gate-cs-exam/#key-topics-to-focus-on-dsa-for-gatecs-exam" target="_blank" rel="noopener noreferrer">
                      <button className="exp">
                        Explore
                      </button>
                    </a>

                </div>
                <div className="card card1" id="educational">
                  <img src={`${process.env.PUBLIC_URL}/images/os.gif`} alt="OS" className="card-img" />

                  <h2>Operating Systems</h2>
                  <p>Understand the core concepts of OS.</p>
                  <a href="https://www.geeksforgeeks.org/operating-systems/" target="_blank" rel="noopener noreferrer">
                      <button className="exp">
                        Explore
                      </button>
                  </a>
                </div>
              </div>

              {/*Choose Us */}

              <div className="why-choose-us" id="about-us">
                <h1>Why Choose Us <span className="tagline-red">?</span> </h1>
                <h3>Unlock Your Potential with Our Comprehensive Learning Approach</h3>
                <div className="reasons-container">
                  <div className="reason-card" id="educational">
                    <h2>01</h2>
                    <h3>Expert Instructors</h3>
                    <p>Our courses are taught by industry experts with years of experience. Our team of accomplished engineers, with impressive coding profiles across various programming platforms, hails from top tech companies like Google, Amazon, Meta, and Microsoft. They also boast a proven track record of successful teaching.</p>
                  </div>
                  <div className="reason-card" id="educational">
                    <h2>02</h2>
                    <h3>Comprehensive Curriculum</h3>
                    <p>We offer a wide range of courses covering all essential topics.Master Data Structures & Algorithms (DSA), System Design, core subjects, and practical projects – all through premium blog posts and in-depth video solutions.</p>
                  </div>
                  <div className="reason-card" id="educational">
                    <h2>03</h2>
                    <h3>Flexible Learning</h3>
                    <p>Learn at your own pace with our self-paced and interactive courses. We prioritize quality content, offering in-depth explanations and a wider range of solved problems in both free and paid courses. Our focus is on developing problem-solving skills through intuitive video explanations.</p>
                  </div>
                </div>
              </div>

              <div className="instructor-section" id="mentor">
             
              
              
                <h2 className="instructor-title">Meet Our <span className="tagline-red1">Exceptional </span> Instructor !</h2>
                <div className="instructor-content">
                  <img src={`${process.env.PUBLIC_URL}/images/mentor.jpg`} alt="instructor-img" className="instructor-img" />
                  <div className="instructor-details">
                    <div className="instructor-info">
                      <img src={`${process.env.PUBLIC_URL}/images/mentor.jpg`} alt="instructor-img" className="instructor-photo" />
                      <div>
                        <h3 className="instructor-name">Shaurya Pratap Singh</h3>
                        <p className="instructor-role">Founder EaseAlgo</p>
                      </div>
                    </div>
                    <ul className="instructor-qualifications">
                      <li>Working @ DRDO</li>
                      <li>ICPC Regionalist '23</li>
                      <li>Web Developer (MERN)</li>
                      <li>Quantum Computing (Qiskit)</li>
                      <li>Published 6 Research papers</li>
                      <li> <a href='https://leetcode.com/u/shaurya123456/'>Leetcode</a> </li>
                      <li> <a href='https://www.hackerrank.com/profile/shaurya010'>Hackerrank</a> </li>
                    </ul>
                    <div className="social-icons">
                      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>

                    
                  </div>

                </div>
              </div>
              
              
              <footer>
                <div className="footer-container">
                  
                  <div className="footer-section">
                    <h2 className="footer-title">EaseAlgo</h2>
                    <p>
                      The best place to learn Data Structures, algorithms, most asked coding
                      interview questions. Real interview experiences free of cost.
                    </p>
                    <div className="social-icons">
                      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>

                  
                  <div className="footer-section">
                    <h3 className="footer-title">Company</h3>
                    <ul className="footer-links">
                      <li><a href="#home">About Us</a></li>
                      <li><a href="#home">Contact Us</a></li>
                      <li><a href="#home">Pricing</a></li>
                      <li><a href="#home">Privacy Policy</a></li>
                      <li><a href="#home">Terms and Conditions</a></li>
                      <li><a href="#home">Cancellation / Refund Policy</a></li>
                    </ul>
                  </div>

                  
                  <div className="footer-section">
                    <h3 className="footer-title">Quick Access</h3>
                    <ul className="footer-links">
                      <li><a href="#home">DSA Sheet</a></li>
                      <li><a href="#home">DSA Playlist</a></li>
                      <li><a href="#home">CS Subjects</a></li>
                      <li><a href="#home">CN Notes</a></li>
                    </ul>
                  </div>

                 
                  <div className="footer-section">
                    <h3 className="footer-title">DSA Sheets</h3>
                    <ul className="footer-links">
                      <li><a href="#home">SDE Sheet</a></li>
                      <li><a href="#home">Algorithms</a></li>
                      <li><a href="#home">SDE Core Sheet</a></li>
                      <li><a href="#home">CP Sheet</a></li>
                    </ul>
                  </div>

                  
                  <div className="footer-section">
                    <h3 className="footer-title">DSA Playlist</h3>
                    <ul className="footer-links">
                      <li><a href="#home">Array Series</a></li>
                      <li><a href="#home">Graph Series</a></li>
                      <li><a href="#home">DP Series</a></li>
                      <li><a href="#home">LinkedList Series</a></li>
                    </ul>
                  </div>
                </div>

                <div className="footer-bottom">

                  <p> <a href="https://www.linkedin.com/in/priyanshi-jagati-776888233/" target='blank'> © 2024 EaseAlgo. All rights reserved. </a></p>
                </div>
              </footer>

            </div>
            </div>
            
          }
        />
        
        <Route path="/" element={<Home />} />
         

        <Route path="EaseAlgo/mcq" element={<MCQ />} />
        <Route path="EaseAlgo/notes" element={<GateNotes />} />
        <Route path="EaseAlgo/about" element={<AboutUs />} />
        <Route path="EaseAlgo/gatemcq" element={<GateMCQ />} />
        <Route path="EaseAlgo/maths" element={<Maths/>} />
        <Route path="EaseAlgo/algo" element={<Algo/>} />
        
    </Routes>
  </Router>

            
    
  );
}

export default App;
