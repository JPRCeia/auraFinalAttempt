import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

const personalities = {
  "Lifelong Learner": {
    name: "Lifelong",
    color: "#DF64E0",
    barColor: "#E997EB",
  },
  "Social Butterfly": {
    name: "Social",
    color: "#FFB52B",
    barColor: "#F9D995",
  },
  "Creative Innovator": {
    name: "Creative",
    color: "#441276",
    barColor: "#BB85F3",
  },
  "Ambitious Leader": {
    name: "Ambitious",
    color: "#B03C38",
    barColor: "#DE6E6C",
  },
  "Humanitarian": {
    name: "Humanitarian",
    color: "#509F70",
    barColor: "#70D99B",
  },
  "Analytical Thinker": {
    name: "Analytical",
    color: "#4A6FDE",
    barColor: "#6E91F7",
  },
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];

  // Contagem das respostas
  const personalityCounts = results.reduce((acc, personality) => {
    acc[personality] = (acc[personality] || 0) + 1;
    return acc;
  }, {});

  const totalResponses = results.length;

// Calcula as porcentagens
const percentages = Object.keys(personalities).reduce((acc, personality) => {
  acc[personality] = ((personalityCounts[personality] || 0) / totalResponses) * 100;
  return acc;
}, {});

// Ordena por porcentagem
const sortedPersonalities = Object.entries(percentages).sort(([, a], [, b]) => b - a);

// Ajuste para evitar empate no primeiro lugar
if (sortedPersonalities.length > 1) {
  sortedPersonalities[0][1] += 1; // Incrementa +1% no primeiro
  sortedPersonalities[1][1] -= 1; // Decrementa -1% no segundo
}

// Certifica-se de que as porcentagens não ultrapassem limites (0% a 100%)
sortedPersonalities.forEach(([personality, percentage]) => {
  percentages[personality] = Math.max(0, Math.min(100, percentage));
});

const dominantPersonality = sortedPersonalities[0][0];
const dominantData = personalities[dominantPersonality];

  const handleRestart = () => {
    navigate('/');
  };

return (
  <div className="result-container">
    {/* Alinhar o conteúdo principal */}
    <div className="content-wrapper">
      {/* Logo */}
      <img src={`${process.env.PUBLIC_URL}./LogoResult.png`} alt="Logo Result" style={{ height: '60px', marginBottom: '10px' }} />

      {/* Título e Mascote */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <img
          src={`${process.env.PUBLIC_URL}./${dominantData.name}.png`}
          alt={`${process.env.PUBLIC_URL}${dominantData.name} Mascot`}
          style={{ height: '300px', marginRight: '100px' }}
        />
        <div>
          <img
            src={`${process.env.PUBLIC_URL}./${dominantData.name}Title.png`}
            alt={`${process.env.PUBLIC_URL}${dominantData.name} Title`}
            style={{ height: '150px', marginBottom: '20px' }}
          />
          <div className="progress-bar">
            <div className="bar" style={{ backgroundColor: dominantData.barColor }}>
              <div
                className="fill"
                style={{
                  width: `${Math.round(percentages[dominantPersonality]) + 20}%`,
                  backgroundColor: dominantData.color,
                }}
              >
                {`${Math.round(percentages[dominantPersonality])}%`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pontos fortes */}
      <img
        src={`${process.env.PUBLIC_URL}./${dominantData.name}Points.png`}
        alt={`${process.env.PUBLIC_URL}${dominantData.name} Points`}
        style={{ height: '180px', marginBottom: '20px', marginTop:'15px' }}
      />

      {/* Descrição e Outras Personalidades */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <img
          src={`${process.env.PUBLIC_URL}./${dominantData.name}Text.png`}
          alt={`${process.env.PUBLIC_URL}${dominantData.name} Text`}
          style={{ flex: '1', marginRight: '30px', height: '450px', marginTop: '15px' }}
        />
       <div style={{ flex: '1' }}>
        {sortedPersonalities.map(([personality, percentage]) => {
          const data = personalities[personality];
          if (personality === dominantPersonality) return null;

            return (
              <div key={personality} style={{ marginBottom: '20px', marginTop: '-15px' }}>
                {/* Nome da Personalidade */}
                <div className="personality-name">
                  {personality}
                </div>
                {/* Barra de Progresso */}
                <div className="progress-bar">
                  <div className="bar" style={{ backgroundColor: data.barColor }}>
                    <div
                      className="fill"
                      style={{
                        width: `${Math.round(percentage) + 20}%`,
                        backgroundColor: data.color,
                      }}
                    >
                      {`${Math.round(percentage)}%`}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    {/* Botão de reinício */}
    <div className="restart-wrapper">
      <button
        className="restart-button"
        style={{
          backgroundColor: dominantData.color,
          color: 'white',
        }}
        onClick={handleRestart}
      >
        Play Again
      </button>
    </div>
  </div>
);
};

export default Result;