import React from 'react';
import './AboutPage.css';

function AboutPage() {
  const teamMembers = [
    { name: 'John Anderson', role: 'Founder', funFact: 'Loves mountain climbing!' },
    { name: 'Jane Smith', role: 'Head of Nutrition', funFact: 'Certified yoga instructor!' },
    // More members
  ];

  return (
    <div className="about-page">
      <h1>About Us</h1>
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="fun-fact">{member.funFact}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-event">
            <h3>2022</h3>
            <p>App Conceptualized</p>
          </div>
          <div className="timeline-event">
            <h3>2023</h3>
            <p>First Release</p>
          </div>
          {/* Add more events */}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
