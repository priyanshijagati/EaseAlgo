import React from 'react';
import './App.css';
// import './footer.css';
// import { FaLinkedin, FaXing, FaInstagram, FaYoutube } from 'react-icons/fa';

function handleSmoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").slice(1); // Remove the "#" from the href
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}


function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar" id="navbar">
        <div className="logo">EduTech</div>
        <ul className="nav-links">
          <li><a href="#home" onClick={handleSmoothScroll}>Home</a></li>
          <li><a href="#courses" onClick={handleSmoothScroll}>Course</a></li>
          <li><a href="#about-us" onClick={handleSmoothScroll}>About Us</a></li>
          <li><a href="#mentor" onClick={handleSmoothScroll}>Mentor</a></li>
          <li>
            <button className="login-button">Login</button>
          </li>
        </ul>
      </nav>

      {/* Tagline Section */}
      <div className="tagline"  id="home">
        <div className="tagline-content">
          <h1 className="tagline-title">
            <span className="tagline-red">Empower</span> Your Learning <span className="tagline-red">Journey</span>
          </h1>
          <p className="tagline-subtitle">Unlock your potential with our expertly crafted courses</p>
          <button className="explore-button">Explore Courses</button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="card-container" id="courses">
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/system.gif`} alt="System Design" className="card-img" />

          <h3>System Design</h3>
          <p>Learn how to design scalable systems.</p>
          <button className="exp">Explore</button>
        </div>
        <div className="card" id="educational">
          <img src={`${process.env.PUBLIC_URL}/images/dsa.gif`} alt="dsa" className="card-img"/>
          <h3>Data Structures & Algorithms</h3>
          <p>Master the fundamentals of DSA.</p>
          <button className="exp">
            Explore
          </button>
        </div>
        <div className="card" id="educational">
          <img src={`${process.env.PUBLIC_URL}/images/playlist.gif`} alt="playlist" className="card-img" />

          <h3>Playlist</h3>
          <p>Your curated list of learning resources.</p>
          <button className="exp">Explore</button>
        </div>
        <div className="card" id="educational">
          <img src={`${process.env.PUBLIC_URL}/images/oops.gif`} alt="Oops" className="card-img" />
          <h3>Object-Oriented Programming</h3>
          <p>Explore the principles of OOP.</p>
          <button className="exp">Explore</button>
        </div>
        <div className="card" id="educational">
        <img src={`${process.env.PUBLIC_URL}/images/sheet.gif`} alt="Sheet" className="card-img" />

          <h3>Cheat Sheet</h3>
          <p>Quick reference for key concepts.</p>
          <button className="exp">Explore</button>
        </div>
        <div className="card" id="educational">
        <img src={`${process.env.PUBLIC_URL}/images/os.gif`} alt="OS" className="card-img" />

          <h3>Operating Systems</h3>
          <p>Understand the core concepts of OS.</p>
          <button className="exp">Explore</button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      
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
        <h2 className="instructor-title">Meet Our <span className="tagline-red">Exceptional </span> Instructor</h2>
        <div className="instructor-content">
          <img src={`${process.env.PUBLIC_URL}/images/mentor.jpeg`} alt="instructor-img" className="instructor-img" />
          <div className="instructor-details">
            <div className="instructor-info">
              <img src={`${process.env.PUBLIC_URL}/images/mentor.jpeg`} alt="instructor-img" className="instructor-photo" />
              <div>
                <h3 className="instructor-name">Shaurya Pratap Singh</h3>
                <p className="instructor-role">Founder EduTech</p>
              </div>
            </div>
            <ul className="instructor-qualifications">
              <li>Working @ DRDO</li>
              <li>ICPC Regionalist '23</li>
              <li>Web Developer (MERN)</li>
              <li>Quantum Computing (Qiskit)</li>
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
          {/* Logo and Description */}
          <div className="footer-section">
            <h2 className="footer-title">EduTech</h2>
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

          {/* Company Links */}
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms and Conditions</a></li>
              <li><a href="">Cancellation / Refund Policy</a></li>
            </ul>
          </div>

          {/* Quick Access Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Access</h3>
            <ul className="footer-links">
              <li><a href="#">DSA Sheet</a></li>
              <li><a href="#">DSA Playlist</a></li>
              <li><a href="#">CS Subjects</a></li>
              <li><a href="#">CN Notes</a></li>
            </ul>
          </div>

          {/* DSA Sheets Links */}
          <div className="footer-section">
            <h3 className="footer-title">DSA Sheets</h3>
            <ul className="footer-links">
              <li><a href="#">SDE Sheet</a></li>
              <li><a href="#">Algorithms</a></li>
              <li><a href="#">SDE Core Sheet</a></li>
              <li><a href="#">CP Sheet</a></li>
            </ul>
          </div>

          {/* DSA Playlist Links */}
          <div className="footer-section">
            <h3 className="footer-title">DSA Playlist</h3>
            <ul className="footer-links">
              <li><a href="#">Array Series</a></li>
              <li><a href="#">Graph Series</a></li>
              <li><a href="#">DP Series</a></li>
              <li><a href="#">LinkedList Series</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
            
            <p> <a href="https://www.linkedin.com/in/priyanshi-jagati-776888233/"> © 2024 EduTech. All rights reserved. </a></p>
        </div>
      </footer>

    </div>
    
  );
}

export default App;
