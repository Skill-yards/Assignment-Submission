import "./Quiz.css";
import { useState } from "react";
const Quiz = () => {
  const quizQuestions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool Multi Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["React", "Laravel", "Django", "Flask"],
      answer: "React",
    },
    {
      question:
        "Which hook is used for managing state in a functional component?",
      options: ["useEffect", "useState", "useReducer", "useRef"],
      answer: "useState",
    },
    {
      question: "In CSS, which property is used to change text color?",
      options: ["font-color", "text-color", "color", "background-color"],
      answer: "color",
    },
    {
      question:
        "What is the output of: console.log(typeof null) in JavaScript?",
      options: ["null", "object", "undefined", "boolean"],
      answer: "object",
    },
    {
      question: "Which of these is NOT a programming language?",
      options: ["Python", "HTML", "Java", "C++"],
      answer: "HTML",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Syntax",
        "Computer Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question:
        "Which function is used to print data to the console in JavaScript?",
      options: ["log.console()", "console.log()", "print.console()", "print()"],
      answer: "console.log()",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Microsoft", "Facebook (Meta)", "Apple"],
      answer: "Facebook (Meta)",
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Application Process Integration",
        "Automated Program Instruction",
        "Advanced Programming Implementation",
      ],
      answer: "Application Programming Interface",
    },
  ];
  const [CurrentQ, setCurrentQ] = useState(0);
  const [ele, setele] = useState("");
  const handleNext = () => {
    setele("");
    if (CurrentQ < 9) {
      setisClick(false);
      setCurrentQ(CurrentQ + 1);
    }
  };
  const handlePrevious = () => {
    if (CurrentQ > 0) {
      setCurrentQ(CurrentQ - 1);
    }
  };
  const [isClick, setisClick] = useState(false);

  const [marks, setmarks] = useState(0);
  const submit = (ele) => {
    setisClick(true);
    setele(ele);
    if (ele == quizQuestions[CurrentQ].answer) {
      setmarks(marks + 1);
    } else {
      setmarks(marks - 1);
    }
  };
  const Reset = () => {
    setisClick(false);
    setmarks(0);
    setCurrentQ(0);
    setele("");
  };

  return (
    <div className="Show-Content">
      {
        <div className="scoreArea">
          <span>You have chosen:{ele}</span>
          <span> your points:{marks}</span>
        </div>
      }
      <p className="Question">{quizQuestions[CurrentQ].question}</p>
      {quizQuestions[CurrentQ].options.map((ele, index) => (
        <div key={index} className="options">
          
          <button onClick={() => submit(ele)} disabled={isClick}>
            
          </button>
          <p>{ele}</p>
          
        </div>
      ))}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Quiz;
