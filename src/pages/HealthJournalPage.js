import React, { useState } from 'react';
import './HealthJournalPage.css';

function HealthJournalPage() {
  const [logs, setLogs] = useState([]);
  const [input, setInput] = useState('');

  const addLog = () => {
    setLogs([...logs, input]);
    setInput('');
  };

  return (
    <div className="health-journal-page">
      <h1>Health Journal</h1>
      <p>Log your symptoms, track your health journey, and monitor progress with visual graphs.</p>
      <div className="journal-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your symptom..."
        />
        <button onClick={addLog}>Add Log</button>
      </div>
      <div className="log-list">
        <h2>Your Logs</h2>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
      {/* Here you could add a visual timeline or graph component */}
    </div>
  );
}

export default HealthJournalPage;
