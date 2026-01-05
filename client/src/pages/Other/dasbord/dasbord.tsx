import React from 'react';
import '@/dasbord.css';
import { Headers } from '../header/header';

interface Project {
  id: number;
  title: string;
  description: string;
  professor: string;
  imageUrl: string;
}

const Dashboard: React.FC = () => {
  const currentProjects: Project[] = [
    { id: 1, title: 'Project 1', description: 'Lorem ipsum', professor: 'Professor Name', imageUrl: 'https://via.placeholder.com/50' },
    { id: 2, title: 'Project 2', description: 'Lorem ipsum', professor: 'Professor Name', imageUrl: 'https://via.placeholder.com/50' },
    { id: 3, title: 'Project 3', description: 'Lorem ipsum', professor: 'Professor Name', imageUrl: 'https://via.placeholder.com/50' },
  ];

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
   <Headers/>

      <div className="main-layout">
        {/* Left Sidebar */}
        <aside className="left-sidebar">
          <div className="user-card">
            <div className="user-banner"></div>
            <img src="https://wallpapercave.com/wp/wp15315874.jpg" alt="Profile" className="profile-img" />
            <h3>Bhoomi</h3>
            <p>Student</p>
            <button className="view-profile-btn">View Full Profile</button>
          </div>
          <div className="enrolled-projects">
            <h4>Enrolled Projects</h4>
            <ul>
              <li>Digital Systems</li>
              <li>Data Structures</li>
            </ul>
          </div>
        </aside>

        {/* Center Content */}
        <main className="content-area">
          <ProjectSection title="My Current Projects" projects={currentProjects} />
          <ProjectSection title="My Successful Projects" projects={currentProjects} />
          <ProjectSection title="Project Recommendations" projects={currentProjects} isRecommendation />
        </main>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <div className="side-box">
            <h4>Upcoming Webinars</h4>
            <ul className="sidebar-list">
              <li>Machine Learning</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>
          <div className="side-box">
            <h4>Messages</h4>
            <div className="message-item"><span>⬤</span> Bhoomi</div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// Sub-component for Project List
const ProjectSection: React.FC<{ title: string; projects: Project[]; isRecommendation?: boolean }> = ({ title, projects, isRecommendation }) => (
  <section className="project-section">
    <div className="section-header">
      <h2>{title}</h2>
    </div>
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <img src={project.imageUrl} alt="Project" />
          <div className="project-info">
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <small>{isRecommendation ? 'Registered under: ' : 'Working under: '} {project.professor}</small>
          </div>
          {isRecommendation && (
            <div className="action-buttons">
              <button>🔄</button>
              <button>🔖</button>
            </div>
          )}
        </div>
      ))}
      <button className="view-all-btn">View All ▾</button>
    </div>
  </section>
);

export default Dashboard;