import React, { useState } from 'react';
import './FitnessPage.css';

function FitnessPage() {
  const [workoutProgress, setWorkoutProgress] = useState(0);

  const completeWorkout = () => {
    setWorkoutProgress(workoutProgress + 1);
  };

  return (
    <div className="fitness-page">
      <h1>Fitness</h1>
      <p>Discover cutting-edge workout routines, track your exercises, and smash your fitness goals!</p>
      <div className="workout-demo">
        <h2>Workout of the Day</h2>
        <img src="/workout-demo.gif" alt="Workout Demo" />
      </div>
      <div className="progress-tracker">
        <h2>Your Progress</h2>
        <p>Workouts Completed: {workoutProgress}</p>
        <button onClick={completeWorkout}>Complete Workout</button>
      </div>
    </div>
  );
}

export default FitnessPage;
