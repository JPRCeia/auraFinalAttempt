import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      index:1,
      question: "How do you prefer your work environment to be structured?",
      options: [
        { text: "I thrive in an environment that encourages continuous learning and skill development.", personality: "Lifelong Learner" },
        { text: "I prefer an open, collaborative space that facilitates easy interaction with colleagues.", personality: "Social Butterfly" },
        { text: "I like a flexible environment that allows for spontaneous brainstorming and idea sharing.", personality: "Creative Innovator" },
        { text: "I appreciate a structured environment with clear paths for advancement and leadership opportunities.", personality: "Ambitious Leader" },
        { text: "I value a workplace that prioritizes employee well-being and community engagement.", personality: "Humanitarian" },
        { text: "I prefer a quiet, organized space that allows for focused, uninterrupted work.", personality: "Analytical Thinker" },
      ],
    },
    {
      index:2,
      question: "A cutting-edge technology is being introduced in your field. What's your reaction?",
      options: [
        { text: "Exciting! I can't wait to explore its potential for innovation.", personality: "Creative Innovator" },
        { text: "Fascinating! I'm eager to learn everything about it.", personality: "Lifelong Learner" },
        { text: "Excellent! This could give us a competitive edge.", personality: "Ambitious Leader" },
        { text: "Interesting. I'll need to thoroughly evaluate its pros and cons.", personality: "Analytical Thinker" },
        { text: "Cool! I wonder how this will change our team dynamics.", personality: "Social Butterfly" },
        { text: "I hope this technology can be used to help people in need.", personality: "Humanitarian" },
      ],
    },
    {
      index:3,
      question: "You've just completed an intensive training program. How do you feel?",
      options: [
        { text: "That was great! What's the next course I can take?", personality: "Lifelong Learner" },
        { text: "Satisfying. Now, how can I apply this knowledge practically?", personality: "Analytical Thinker" },
        { text: "Inspiring! I have so many new ideas to explore.", personality: "Creative Innovator" },
        { text: "Valuable. I wonder how I can use this to benefit others.", personality: "Humanitarian" },
        { text: "Fun! I enjoyed learning with my colleagues.", personality: "Social Butterfly" },
        { text: "Useful. This new knowledge will help me advance my career.", personality: "Ambitious Leader" },
      ],
    },
    {
      index:4,
      question: "You're asked to lead a project that could significantly impact your industry. What's your focus?",
      options: [
        { text: "I'm focused on how this project can create positive change in the world.", personality: "Humanitarian" },
        { text: "I'm excited to bring groundbreaking ideas to the table.", personality: "Creative Innovator" },
        { text: "I'm looking forward to bringing together a diverse team for this project.", personality: "Social Butterfly" },
        { text: "I see this as a chance to make my mark in the industry.", personality: "Ambitious Leader" },
        { text: "I'm eager to gain new insights from this industry-changing project.", personality: "Lifelong Learner" },
        { text: "I'll ensure we have a solid, data-driven approach to maximize impact.", personality: "Analytical Thinker" },
      ],
    },
    {
      index:5,
      question: "Your company is going through a major restructuring. What's your main concern?",
      options: [
        { text: "I hope this doesn't negatively impact our employees or our mission.", personality: "Humanitarian" },
        { text: "How can I adapt and learn from this change?", personality: "Lifelong Learner" },
        { text: "We need to carefully evaluate the risks and benefits.", personality: "Analytical Thinker" },
        { text: "I'm worried about how this will affect our team dynamics.", personality: "Social Butterfly" },
        { text: "This could be an opportunity to reimagine our processes.", personality: "Creative Innovator" },
        { text: "How can I position myself well in this new structure?", personality: "Ambitious Leader" },
      ],
    },
    {
      index:6,
      question: "How do you manage your finances?",
      options: [
        { text: "I spend on causes I care about while saving to support myself and those in need.", personality: "Humanitarian" },
        { text: "I budget carefully and invest in opportunities that expand my knowledge and experiences.", personality: "Lifelong Learner" },
        { text: "I use a detailed plan to analyze and optimize my spending, saving, and investments.", personality: "Analytical Thinker" },
        { text: "I budget for social activities and experiences with my friends and family.", personality: "Social Butterfly" },
        { text: "I budget for essentials, but I also like to buy and try out new technologies and creative tools.", personality: "Creative Innovator" },
        { text: "I strategically build wealth through smart investments and savings aligned with my long-term goals.", personality: "Ambitious Leader" },
      ],
    },
    {
      index:7,
      question: "How do you approach collaboration and teamwork?",
      options: [
        { text: "I thrive on teamwork and always try to facilitate open communication and idea sharing.", personality: "Social Butterfly" },
        { text: "I enjoy bouncing ideas off others and combining different perspectives for innovative solutions.", personality: "Creative Innovator" },
        { text: "I see it as an opportunity to demonstrate leadership and guide the team towards success.", personality: "Ambitious Leader" },
        { text: "I focus on ensuring everyone's voice is heard and that our work benefits the wider community.", personality: "Humanitarian" },
        { text: "I contribute by providing thorough analysis and logical input to group discussions.", personality: "Analytical Thinker" },
        { text: "I see every collaboration as a chance to learn from others' expertise and experiences.", personality: "Lifelong Learner" },
      ],
    },
    {
      index:8,
      question: "You're facing a challenging career decision. What's your biggest worry?",
      options: [
        { text: "What if this decision doesn't advance my career as I hope?", personality: "Ambitious Leader" },
        { text: "Have I considered all possible outcomes of this decision?", personality: "Analytical Thinker" },
        { text: "Will this choice provide any learning opportunities?", personality: "Lifelong Learner" },
        { text: "What if this limits my ability to create?", personality: "Creative Innovator" },
        { text: "How will this affect my relationships with colleagues?", personality: "Social Butterfly" },
        { text: "Will this allow me to make a positive impact?", personality: "Humanitarian" },
      ],
    },
    {
      index:9,
      question: "How do you react when you make a mistake?",
      options: [
        { text: "I analyze the cause and plan to prevent it in the future.", personality: "Analytical Thinker" },
        { text: "I take responsibility, fix it quickly, and learn from it.", personality: "Ambitious Leader" },
        { text: "I treat it as a learning opportunity to improve.", personality: "Lifelong Learner" },
        { text: "I discuss it with others to gain feedback and strengthen connections.", personality: "Social Butterfly" },
        { text: "I use it as inspiration for new ideas and approaches.", personality: "Creative Innovator" },
        { text: "I consider the impact on others and find ways to make amends.", personality: "Humanitarian" },
      ],
    },
    {
      index:10,
      question: "In your free time, what kind of activities do you like to do?",
      options: [
        { text: "I go to different classes and workshops, such as language-learning.", personality: "Lifelong Learner" },
        { text: "I enjoy setting personal goals and participating in activities that help me develop my leadership skills.", personality: "Ambitious Leader" },
        { text: "I like engaging in creative projects like painting or writing.", personality: "Creative Innovator" },
        { text: "I like to engage in volunteer work in diverse causes.", personality: "Humanitarian" },
        { text: "I enjoy participating in group activities that allow me to connect with others.", personality: "Social Butterfly" },
        { text: "I spend my free time reading thought-provoking articles and engaging in activities or games that require strategic thinking.", personality: "Analytical Thinker" },
      ],
    },
    {
      index:11,
      question: "How do you organize your daily activities or routine?",
      options: [
        { text: "I break my routine into small activities so I can prioritize them and create a schedule.", personality: "Analytical Thinker" },
        { text: "I prioritize the activities that can help me achieve my personal goals.", personality: "Ambitious Leader" },
        { text: "I'm always trying to learn new ways to organize it, there is no right way for me.", personality: "Lifelong Learner" },
        { text: "I like to live life without much planning.", personality: "Social Butterfly" },
        { text: "I cluster my activities and take my time to solve them.", personality: "Creative Innovator" },
        { text: "My priority will always be the activities that impact others the most.", personality: "Humanitarian" },
      ],
    },
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  shuffleArray(questions);
  questions.forEach(question => shuffleArray(question.options));
  
  const logoToBackgroundMap = [
    { backgroundColor: '#F05AE6' },
    { backgroundColor: '#BF3032' },
    { backgroundColor: '#28A16C' },
    { backgroundColor: '#FFB52B' },
    { backgroundColor: '#3E70E6' },
    { backgroundColor: '#4A0C7B' },
  ];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [logoBackground, setLogoBackground] = useState(() => {
    const randomIndex = Math.floor(Math.random() * logoToBackgroundMap.length);
    return logoToBackgroundMap[randomIndex];
  });
  const [shuffledQuestions] = useState(questions);
  const navigate = useNavigate();
  
  useEffect(() => {
    const getRandomLogoBackground = () => {
      const randomIndex = Math.floor(Math.random() * logoToBackgroundMap.length);
      return logoToBackgroundMap[randomIndex];
    };
  
    setLogoBackground(getRandomLogoBackground());
  }, [currentQuestionIndex]);
  
  const handleOptionClick = (index) => {
    const selectedPersonality = shuffledQuestions[currentQuestionIndex].options[index].personality;
    const updatedResults = [...results, selectedPersonality];
    setResults(updatedResults);
  
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      navigate('/result', { state: { results: updatedResults } });
    }
  };
  
  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
      setResults(prevResults => prevResults.slice(0, -1)); // Remove the last selected result
    }
  };
  
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="quiz-container">
      <div
        className="header"
        style={{ backgroundColor: logoBackground.backgroundColor }}
      >
        <div className="header-top">
          <div className="header-left">
            <span>aura</span>
          </div>
        </div>
        <h1 className="question">{currentQuestion.question}</h1>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="options-grid">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              results[currentQuestionIndex] === option.personality
                ? "selected"
                : ""
            }`}
            onClick={() => handleOptionClick(index)}
          >
            {option.text}
          </button>
        ))}
      </div>
      {currentQuestionIndex > 0 && (
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      )}
    </div>
  );
};

export default Quiz;
