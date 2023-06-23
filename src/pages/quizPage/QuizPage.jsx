import React, { useState } from 'react';
import './quizPage.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

const QuizPage = () => {
  const questions = [
    {
      question: 'What does CI/CD stand for?',
      options: [
        'Continuous Integration/Continuous Deployment',
        'Continuous Inspection/Continuous Delivery',
        'Continuous Integration/Continuous Delivery',
        'Continuous Integration/Continuous Deployment',
      ],
      answer: 'Continuous Integration/Continuous Delivery',
    },
    
    {
        question: 'What is the main goal of DevOps?',
        options: [
          'Faster software development',
          'Improved collaboration between teams',
          'Continuous delivery of high-quality software',
          'All of the above',
        ],
        answer: 'All of the above',
      },
    
      {
        question: 'What is the purpose of version control systems in DevOps?',
        options: [
          'Tracking changes to source code',
          'Enabling collaboration among team members',
          'Maintaining a history of code changes',
          'All of the above',
        ],
        answer: 'All of the above',
      },
      {
        question: 'What is the role of continuous integration (CI) in DevOps?',
        options: [
          'Automating the build process',
          'Running automated tests',
          'Checking code quality',
          'All of the above',
        ],
        answer: 'All of the above',
      },
      {
        question: 'What is the purpose of containerization in DevOps?',
        options: [
          'Isolating applications and their dependencies',
          'Enabling consistent deployment across different environments',
          'Improving scalability and resource utilization',
          'All of the above',
        ],
        answer: 'All of the above',
      },
      {
        question: 'What is the concept of "Infrastructure as Code" (IaC) in DevOps?',
        options: [
          'Managing infrastructure using code',
          'Automating provisioning and configuration of infrastructure',
          'Versioning infrastructure changes',
          'All of the above',
        ],
        answer: 'All of the above',
      },
      {
        question: 'What is the purpose of continuous delivery (CD) in DevOps?',
        options: [
          'Automating the release process',
          'Ensuring applications are always in a releasable state',
          'Reducing time-to-market for new features',
          'All of the above',
        ],
        answer: 'All of the above',
      },
      {
        question: 'What is the role of monitoring and observability in DevOps?',
        options: [
          'Gaining insights into application performance',
          'Detecting and diagnosing issues in real-time',
          'Optimizing system performance and reliability',
          'All of the above',
        ],
        answer: 'All of the above',
      },
      {
        question: 'What is the purpose of continuous deployment (CD) in DevOps?',
        options: [
          'Automating the deployment process',
          'Enabling frequent and reliable releases',
          'Accelerating time-to-market for new features',
          'All of the above',
        ],
        answer: 'All of the above',
      },
      {
        question: 'What is the role of configuration management tools in DevOps?',
        options: [
          'Automating the provisioning and management of infrastructure',
          'Enabling consistent and reproducible environments',
          'Tracking and managing configuration changes',
          'All of the above',
        ],
        answer: 'All of the above',
      },
      {
        question: 'What is the purpose of continuous testing in DevOps?',
        options: [
          'Automating the testing process',
          'Ensuring software quality throughout the development lifecycle',
          'Detecting and fixing bugs early',
          'All of the above',
        ],
        answer: 'All of the above',
      },  

    // Add more questions following the same format
    // {
    //   question: '...',
    //   options: ['...', '...', '...', '...'],
    //   answer: '...',
    // },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (index, answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    // Calculate the score
    let totalScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].answer) {
        totalScore++;
      }
    }
    setScore(totalScore);

    setShowResult(true);
  };

  return (
    <div className='quiz-page'>
            <Topbar/>
        <div className='quiz-content'>
        <div>
            <Sidebar/>
        </div>
        <div className="quiz-container">
            <h1 className='quiz-header'>DevOps Quiz</h1>
            {questions.map((question, index) => (
                <div key={index}>
                <div className="quiz-question">{question.question}</div>
                <ul className="quiz-options">
                    {question.options.map((option, optionIndex) => (
                    <li className="quiz-option" key={optionIndex}>
                        <label className="quiz-label">
                        <input
                        className='quiz-input'
                            type="radio"
                            name={`question-${index}`}
                            value={option}
                            checked={selectedAnswers[index] === option}
                            onChange={() => handleAnswerSelect(index, option)}
                        />
                        <div className='quizOpations'>
                            {option}
                        </div>
                        
                        </label>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            <button className='quiz-button' onClick={handleSubmit}>Submit</button>
            {showResult && (
                <div className="quiz-result">
                Your score: {score} out of {questions.length}
                <br /> It will add your profile rate..
                </div>
            )}
        </div>
        </div>

    </div>
    
  );
};

export default QuizPage;
