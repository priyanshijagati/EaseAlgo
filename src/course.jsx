import React from 'react';
import './App.css';

function Course(){
    return(
        <div className="card-container" id="educational card">
        <div className="card" id="educational">
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
    )


}
export default Course;