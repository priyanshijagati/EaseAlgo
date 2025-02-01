import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./mcq.css";

const MCQ = () => {
  const questions = [
    { 
      question: "1. An array A consists of n integers in locations A[0], A[1], ... A[n-1]. It is required to shift the elements of the array cyclically to the left by k places, where 1 ≤ k ≤ (n - 1). An incomplete algorithm for doing this in linear time, without using another array is given below. Complete the algorithm by filling in the blanks.",
       options:
      [
       "i > min; j != (n + i) mod n; A[j + k] = temp; i + 1;", 
       "i < min; j != (n + i - k) mod n; A[(j + k) mod n] = temp; i + 1;",
       "i < min; j != (n + i + k) mod n; A[j + k] = temp; i + 1;",
       "i > min; j != (n + i + k) mod n; A[(j + k) mod n] = temp; i + 1;"
      ], 
      correctAnswer: "i < min; j != (n + i - k) mod n; A[(j + k) mod n] = temp; i + 1;" 
    },


     { 
      question: "2. What is the time complexity of binary search in a sorted array?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(log n)" 
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
    question: "6. Which of the following is a feature of Python DocString?", 
    options: ["All functions should have a docstring in python", "DocStrings can be accessed by the _doc_ attribute on objects", "his feature provides a very convenient way of associating documentation with python modules, functions, classes and methods", "All of the above"], 
    correctAnswer: "All of the above" 
    }, 
    { 
    question: "7. Consider the following declaration of a two-dimensional array in C : Char a[100][100]  Assuming that the main memory is byte-addressable and that array is stored starting form memory address 0, the address of a [40] [50] is", 
    options: ["4040", "4050", "5040", "5440"], 
    correctAnswer: "4050" 
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
    { 
      question: "12. Consider a B+-tree in which the maximum number of keys in a node is 5. What is the minimum number of keys in any non-root node?;",
      options: ["2", "1", "4", "3"], 
      correctAnswer: "2" 
    },
    { 
      question: "13. A FAT (file allocation table) based file system is being used and the total overhead of each entry in the FAT is 4 bytes in size. Given a 100 x 106 bytes disk on which the file system is stored and data block size is 103 bytes, the maximum size of a file that can be stored on this disk in units of 106 bytes is ;",
      options: [
        "97.2 to 98.5", 
        "100.5 to 101.4", 
        "99.55 to 99.65",
         "89.1 to 91.2"
        ], 
      correctAnswer: "99.55 to 99.65" 
    },
    {
      question: "14. Consider the following algorithm for searching for a given number x in an unsorted array A[1.....n] having n distinct values : (1) Choose an i uniformly at random from [1....n] (2) If A[i] = x then stop else Goto 1;",
    options: ["n", "n-1", "2n", "n/2"], 
    correctAnswer: "n" 
    },
    { 
      question: "15. Consider a B+-tree in which the maximum number of keys in a node is 5. What is the minimum number of keys in any non-root node?;",
      options: ["2", "1", "4", "3"], 
      correctAnswer: "2" 
    },
    { 
      question: "16. A FAT (file allocation table) based file system is being used and the total overhead of each entry in the FAT is 4 bytes in size. Given a 100 x 106 bytes disk on which the file system is stored and data block size is 103 bytes, the maximum size of a file that can be stored on this disk in units of 106 bytes is ;",
      options: [
        "97.2 to 98.5", 
        "100.5 to 101.4", 
        "99.55 to 99.65",
         "89.1 to 91.2"
        ], 
      correctAnswer: "99.55 to 99.65" 
    },
    { 
      question: "17. What is the time complexity of binary search in a sorted array?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(log n)" 
    }, 
    { 
      question: "18. What is the time complexity of binary search in a sorted array?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(log n)" 
    }, 
    { 
      question: "19. What is the time complexity of binary search in a sorted array?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(log n)" 
    }, 
    { 
      question: "20. What is the time complexity of binary search in a sorted array?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(log n)" 
    }, 
    
    
    
    
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
              <h3>Array</h3>
              {questions.slice(0, 10).map((_, index) => (
                <li key={index}>
                  <a href={`#question-${index + 1}`} onClick={handleSmoothScroll}>
                    Question {index + 1}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <h3>Tree</h3>
              {questions.slice(11, 14).map((_, index) => (
                <li key={index}>
                  <a href={`#question-${index + 11}`} onClick={handleSmoothScroll}>
                    Question {index + 11}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <h3>Graph</h3>
              {questions.slice(14, 21).map((_, index) => (
                <li key={index}>
                  <a href={`#question-${index + 14}`} onClick={handleSmoothScroll}>
                    Question {index + 15}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content (Aligned to Sidebar) */}
        <div className="mcq-content">
          <header className="mcq-header" id="home">
            <h1>Data Structures & Algorithms</h1>
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
                      className={`option-btn ${answered?.selectedOption === option
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
                    className={`feedback ${answered.isAnswerCorrect ? "correct-feedback" : "incorrect-feedback"
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

export default MCQ;
