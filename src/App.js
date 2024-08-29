import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DietNutritionPage from './pages/DietNutritionPage';
import FitnessPage from './pages/FitnessPage';
import MentalHealthPage from './pages/MentalHealthPage';
import HealthJournalPage from './pages/HealthJournalPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/diet-nutrition">Diet & Nutrition</Link></li>
          <li><Link to="/fitness">Fitness</Link></li>
          <li><Link to="/mental-health">Mental Health</Link></li>
          <li><Link to="/health-journal">Health Journal</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/diet-nutrition" element={<DietNutritionPage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/mental-health" element={<MentalHealthPage />} />
        <Route path="/health-journal" element={<HealthJournalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
