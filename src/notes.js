import React, { useState } from "react";
import "./notes.css";
import Particle from "./particle";




const GateNotes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const notesData = [
    { subject: "Mathematics", link: "/notes/mathematics.pdf" },
    { subject: "Data Structures", link: "/notes/data-structures.pdf" },
    { subject: "Algorithms", link: "/notes/algorithms.pdf" },
    { subject: "Operating Systems", link: "/notes/operating-systems.pdf" },
    { subject: "Computer Networks", link: "/notes/computer-networks.pdf" },
    { subject: "Compiler Design", link: "/notes/computer-networks.pdf" },
    { subject: "DBMS", link: "/notes/computer-networks.pdf" },
    { subject: "General Aptitude", link: "/notes/computer-networks.pdf" },
  ];

  const filteredNotes = notesData.filter((note) =>
    note.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  

  return (
    <>

    <nav className="navbar" id="navbar">
          <div className="logo">EaseAlgo</div>
          <ul className="nav-links">
            <li>
              <a href="/EaseAlgo" >
                Home
              </a>
            </li>
            <li>
              <a href="/EaseAlgo">
                Course
              </a>
            </li>
            <li>
              <a href="./about" >
                About Us
              </a>
            </li>
            <li>
              <a href="/EaseAlgo" >
                Mentor
              </a>
            </li>
            <li>
              <button className=""></button>
            </li>
          </ul>
        </nav>
        <Particle/>
    
    <div className="gate-notes-container">
    
      <header className="gate-notes-header">
        <h1 className="gate-notes-title">GATE Notes</h1>
        <p className="gate-notes-description">
          Explore and download curated GATE preparation notes for all subjects.
        </p>
      </header>

      <div className="gate-notes-search-bar">
        <input
          type="text"
          placeholder="Search for a subject..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="gate-notes-input"
        />
      </div>

      <div className="gate-notes-list">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div key={index} className="gate-notes-card">
              <h3 className="gate-notes-card-title">{note.subject}</h3>
              <a href={note.link} className="gate-notes-download-button" target="_blank" rel="noopener noreferrer">
                Download Notes
              </a>
            </div>
          ))
        ) : (
          <p className="gate-notes-no-results">No results found for "{searchQuery}".</p>
        )}
      </div>
    </div>

    
    </>
  );
};

export default GateNotes;
