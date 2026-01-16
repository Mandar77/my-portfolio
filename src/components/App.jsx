import React, { useState } from 'react';
import Terminal from './Terminal';
import GUI from './GUI';
import '../styles/index.css';

function App() {
  const [isDeveloperMode, setIsDeveloperMode] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleModeSwitch = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsDeveloperMode(!isDeveloperMode);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className={`app-container ${isTransitioning ? 'transitioning' : ''}`}>
      {isDeveloperMode ? (
        <Terminal onModeSwitch={handleModeSwitch} />
      ) : (
        <GUI onModeSwitch={handleModeSwitch} />
      )}
    </div>
  );
}

export default App;
