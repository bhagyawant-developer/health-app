import React, { useState } from 'react';
import './MentalHealthPage.css';

function MentalHealthPage() {
  const [mood, setMood] = useState('Neutral');

  const changeMood = (newMood) => {
    setMood(newMood);
  };

  return (
    <div className="mental-health-page">
      <h1>Mental Health</h1>
      <p>Relax with guided meditation, track your mood, and connect with top therapists.</p>
      <div className="mood-tracker">
        <h2>How are you feeling today?</h2>
        <div className="mood-buttons">
          <button onClick={() => changeMood('Happy')}>😊</button>
          <button onClick={() => changeMood('Neutral')}>😐</button>
          <button onClick={() => changeMood('Sad')}>😢</button>
        </div>
        <div className="current-mood">
          <p>Your current mood: {mood}</p>
        </div>
      </div>
      <div className="meditation-guides">
        <h2>Guided Meditation</h2>
        <audio controls>
          <source src="/meditation-session.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default MentalHealthPage;
