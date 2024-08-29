import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="welcome-banner">
        <h1>Welcome to the Future of Health</h1>
        <p>Your journey to a healthier life starts here.</p>
      </div>
      <div className="dynamic-tip">
        <p>Tip of the Day: Stay hydrated and take short walks throughout your day!</p>
      </div>
    </div>
  );
}

export default HomePage;
