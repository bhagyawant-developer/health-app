import React, { useState } from 'react';
import './DietNutritionPage.css';

function DietNutritionPage() {
  const [calories, setCalories] = useState(0);

  const addCalories = (amount) => {
    setCalories(calories + amount);
  };

  return (
    <div className="diet-nutrition-page">
      <h1>Diet & Nutrition</h1>
      <p>Customize your meal plans, track your calories, and get expert nutritional advice.</p>
      <div className="calorie-tracker">
        <h2>Daily Calorie Tracker</h2>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${calories / 20}%` }}></div>
        </div>
        <button onClick={() => addCalories(100)}>Add 100 Calories</button>
      </div>
    </div>
  );
}

export default DietNutritionPage;
