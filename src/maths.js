import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./mcq.css";

const Maths = () => {
  const questions = [
    { 
      question: "1. In a class of 500 students, each student is enrolled in one or more of the following subjects: chemistry, physics, and mathematics. The enrollment records show the following numbers: chemistry (329), physics (186), mathematics (295), chemistry and physics (83), chemistry and mathematics (217), and physics and mathematics (63). How many students are enrolled in all three subjects?",
       options:
      [
       "35", 
       "45",
       "50",
       "55"
      ], 
      correctAnswer: "45" 
    },


     { 
      question: "2. If three fair six-sided dice are rolled at the same time, what is the probability that all three dice show the same number?",
      options: ["0.025", "0.05", "0.25", "0.5"],
      correctAnswer: "0.025" 
    }, 
    { 
      question: "3. Which data structure is used in a Breadth-First Search (BFS) traversal?",
      options: ["Stack", "Queue", "Priority Queue", "Linked List"],
      correctAnswer: "Queue" 
    }, 
    { 
    question: "4. A frame buffer array is addressed in row major order for a monitor with pixel locations starting from (0,0) and ending with (100,100). What is address of the pixel(6,10)? Assume one bit storage per pixel and starting pixel location is at 0. ",
    options: ["1016", "1006", "610", "616"], 
    correctAnswer: "1016" 
    }, 
    { 
    question: "5.  Which is an important advantage of matrices? ", 
    options: ["Plotting of graph", "Internal Complexity", "Less efficiency of space", "None of the above"],
    correctAnswer: "Plotting of graph" 
    },
    { 
    question: "6. Consider the function f(x) = sin(x) in the interval [π/4, 7π/4]. The number and location(s) of the local minima of this function are", 
    options: ["0 and 0.5", "0 and 1", "0.5 and 1", "0.25 and 0.75"], 
    correctAnswer: "0.5 and 1" 
    }, 
    { 
    question: "7. Consider the function f(x) = sin(x) in the interval [π/4, 7π/4]. The number and location(s) of the local minima of this function are ", 
    options: ["Two, at π/2 and 3π/2", "One, at 3π/2", "One, at π/2", "Two, at π/4 and 3π/2"], 
    correctAnswer: "Two, at π/4 and 3π/2" 
    }, 
    { 
    question: "8. Consider the following algorithm for searching for a given number x in an unsorted array A[1.....n] having n distinct values : (1) Choose an i uniformly at random from [1....n] (2) If A[i] = x then stop else Goto 1;",
    options: ["n", "n-1", "2n", "n/2"], 
    correctAnswer: "n" 
    },
    { 
      question: "9. Consider a B+-tree in which the maximum number of keys in a node is 5. What is the minimum number of keys in any non-root node?;",
      options: ["2", "1", "4", "3"], 
      correctAnswer: "2" 
    },
    { 
      question: "10. A FAT (file allocation table) based file system is being used and the total overhead of each entry in the FAT is 4 bytes in size. Given a 100 x 106 bytes disk on which the file system is stored and data block size is 103 bytes, the maximum size of a file that can be stored on this disk in units of 106 bytes is ;",
      options: [
        "97.2 to 98.5", 
        "100.5 to 101.4", 
        "99.55 to 99.65",
         "89.1 to 91.2"
        ], 
      correctAnswer: "99.55 to 99.65" 
    },

    {
      question: "11. Consider the following algorithm for searching for a given number x in an unsorted array A[1.....n] having n distinct values : (1) Choose an i uniformly at random from [1....n] (2) If A[i] = x then stop else Goto 1;",
    options: ["n", "n-1", "2n", "n/2"], 
    correctAnswer: "n" 
    },
    // { 
    //   question: "12. Consider a B+-tree in which the maximum number of keys in a node is 5. What is the minimum number of keys in any non-root node?;",
    //   options: ["2", "1", "4", "3"], 
    //   correctAnswer: "2" 
    // },
    // { 
    //   question: "13. A FAT (file allocation table) based file system is being used and the total overhead of each entry in the FAT is 4 bytes in size. Given a 100 x 106 bytes disk on which the file system is stored and data block size is 103 bytes, the maximum size of a file that can be stored on this disk in units of 106 bytes is ;",
    //   options: [
    //     "97.2 to 98.5", 
    //     "100.5 to 101.4", 
    //     "99.55 to 99.65",
    //      "89.1 to 91.2"
    //     ], 
    //   correctAnswer: "99.55 to 99.65" 
    // },
    // {
    //   question: "14. Consider the following algorithm for searching for a given number x in an unsorted array A[1.....n] having n distinct values : (1) Choose an i uniformly at random from [1....n] (2) If A[i] = x then stop else Goto 1;",
    // options: ["n", "n-1", "2n", "n/2"], 
    // correctAnswer: "n" 
    // },
    // { 
    //   question: "15. Consider a B+-tree in which the maximum number of keys in a node is 5. What is the minimum number of keys in any non-root node?;",
    //   options: ["2", "1", "4", "3"], 
    //   correctAnswer: "2" 
    // },
    // { 
    //   question: "16. A FAT (file allocation table) based file system is being used and the total overhead of each entry in the FAT is 4 bytes in size. Given a 100 x 106 bytes disk on which the file system is stored and data block size is 103 bytes, the maximum size of a file that can be stored on this disk in units of 106 bytes is ;",
    //   options: [
    //     "97.2 to 98.5", 
    //     "100.5 to 101.4", 
    //     "99.55 to 99.65",
    //      "89.1 to 91.2"
    //     ], 
    //   correctAnswer: "99.55 to 99.65" 
    // },
    // { 
    //   question: "17. What is the time complexity of binary search in a sorted array?",
    //   options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    //   correctAnswer: "O(log n)" 
    // }, 
    // { 
    //   question: "18. What is the time complexity of binary search in a sorted array?",
    //   options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    //   correctAnswer: "O(log n)" 
    // }, 
    // { 
    //   question: "19. What is the time complexity of binary search in a sorted array?",
    //   options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    //   correctAnswer: "O(log n)" 
    // }, 
    // { 
    //   question: "20. What is the time complexity of binary search in a sorted array?",
    //   options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    //   correctAnswer: "O(log n)" 
    // }, 
    
  ];

  useEffect(() => {
    gsap.fromTo(
      ".mcq-header",
      { opacity: 0, y: 50 }, // Start state
      { opacity: 1, y: 0, duration: 1 } // End state
    );
  }, []);
  
 
function handleSmoothScroll(event)
{
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
  

  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const handleOptionClick = (currentQuestion, option) => {
    const isAnswerCorrect = option === currentQuestion.correctAnswer;
    setAnsweredQuestions((prev) => [
      ...prev.filter((q) => q.question !== currentQuestion.question),
      { question: currentQuestion.question, selectedOption: option, isAnswerCorrect },
    ]);
  };


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

    <div className="mcq-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Questions</h3>
        <div className="sidebar-scroll">
        <ul>
          <h3>Probability</h3>
          {questions.slice(0, 6).map((_, index) => (
            <li key={index}>
              <a href={`#question-${index + 1}`} onClick={handleSmoothScroll}>
                Question {index + 1}
              </a>
              
        </li>

            
          ))}
        </ul>
        <ul>
          <h3>Linear Algebra</h3>
          {questions.slice(7,11).map((_, index) => (
            <li key={index}>
              <a href={`#question-${index + 7}`} onClick={handleSmoothScroll}>
                Question {index + 8}
              </a>
              
            </li>

            
          ))}
        </ul>
        {/* <ul>
          <h3>Calculus</h3>
          {questions.slice(11, ).map((_, index) => (
            <li key={index}>
              <a href={`#question-${index + 11}`} onClick={handleSmoothScroll}>
                Question {index + 12}
              </a>
              
            </li>

            
          ))}
        </ul> */}
      </div>
      </div>

      {/* Main Content */}
      <div className="mcq-content">
        <header className="mcq-header" id="home">
          <h1>Engineering Mathematics</h1>
          <p>Answer the following questions to challenge your skills! 🎉</p>
        </header>

        {questions.map((currentQuestion, index) => {
          const answered = answeredQuestions.find(
            (answer) => answer.question === currentQuestion.question
          );

          return (
            <div key={index} id={`question-${index + 1}`} className="question-card">
              <h3>{currentQuestion.question}</h3>
              <div className="options-container">
                {currentQuestion.options.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    className={`option-btn ${
                      answered?.selectedOption === option
                        ? answered.isAnswerCorrect
                          ? "correct"
                          : "incorrect"
                        : ""
                    }`}
                    onClick={() => handleOptionClick(currentQuestion, option)}
                  >
                    {String.fromCharCode(65 + optIndex)}. {option}
                  </button>
                ))}
              </div>
              {answered?.selectedOption && (
                <p
                  className={`feedback ${
                    answered.isAnswerCorrect ? "correct-feedback" : "incorrect-feedback"
                  }`}
                >
                  {answered.isAnswerCorrect ? "Correct! 🎉" : "Oops! Try again. ❌"}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Maths;
