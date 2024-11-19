import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css'; // Adicione o arquivo CSS

const personalities = {
  "Lifelong Learner": {
    description: "You are always eager to learn new things and continuously seek to expand your knowledge.",
    color: "#3498db"
  },
  "Social Butterfly": {
    description: "You thrive on social interactions and love being around people.",
    color: "#2ecc71"
  },
  "Creative Innovator": {
    description: "You have a unique way of seeing the world and are always coming up with innovative ideas.",
    color: "#f39c12"
  },
  "Ambitious Leader": {
    description: "You are driven and always looking for opportunities to lead and achieve your goals.",
    color: "#e74c3c"
  },
  "Humanitarian": {
    description: "You are compassionate and driven by your desire to help others and make the world a better place.",
    color: "#1abc9c"
  },
  "Analytical Thinker": {
    description: "You are logical and methodical, always looking to solve problems with a structured approach.",
    color: "#8e44ad"
  },
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];

  const allPersonalities = Object.keys(personalities);

  const personalityCounts = results.reduce((acc, personality) => {
    acc[personality] = (acc[personality] || 0) + 1;
    return acc;
  }, {});

  const totalResponses = results.length;

  allPersonalities.forEach(personality => {
    if (!personalityCounts[personality]) {
      personalityCounts[personality] = 0;
    }
  });

  const dominantPersonality = Object.keys(personalityCounts).reduce((a, b) => 
    personalityCounts[a] > personalityCounts[b] ? a : b);

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="result-container">
      <h1 style={{ color: personalities[dominantPersonality].color }}>
        {dominantPersonality}
      </h1>
      <div className="result-content">
        <div className="description-container">
          <p>{personalities[dominantPersonality].description}</p>
        </div>
        <div className="response-list">
          {allPersonalities.map(personality => (
            <div key={personality}>
              <span className="personality-label">{personality}</span>
              <div className="progress-bar">
                <div className="bar">
                  <div 
                    className="fill"
                    style={{
                      width:`${(personalityCounts[personality] / totalResponses) * 100 + 20}%`,
                      backgroundColor: personalities[personality].color
                    }}
                    >
                    {`${Math.round((personalityCounts[personality] / totalResponses) * 100)}%`} {/* Adiciona a porcentagem */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="restart-button" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default Result;