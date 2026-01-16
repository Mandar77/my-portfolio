import React, { useState, useEffect } from 'react';
import { timelineData } from '../data/timeline';
import { skills, skillCategories } from '../data/skills';
import { personalInfo, hobbies, socialLinks } from '../data/personal';
import '../styles/gui.css';

const GUI = ({ onModeSwitch }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  const sections = ['home', 'projects', 'experience', 'skills', 'hobbies', 'contact'];

  const projects = timelineData.filter(d => d.type === 'project');
  const experience = timelineData.filter(d => d.type === 'work');
  const education = timelineData.filter(d => d.type === 'education');

  useEffect(() => {
    setIsVisible({});
    const timer = setTimeout(() => {
      setIsVisible({ [activeSection]: true });
    }, 100);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div className="gui-container">
      {/* Background */}
      <div className="gui-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="gui-nav">
        <div className="nav-logo">MA</div>
        <div className="nav-links">
          {sections.map(section => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        <button className="dev-mode-btn" onClick={onModeSwitch}>
          <span className="btn-icon">{'>'}_</span> Dev Mode
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        {sections.map(section => (
          <button
            key={section}
            className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {section === 'home' && '🏠'}
            {section === 'projects' && '💼'}
            {section === 'experience' && '📋'}
            {section === 'skills' && '🛠️'}
            {section === 'hobbies' && '🏸'}
            {section === 'contact' && '📧'}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="gui-main">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className={`gui-section home-section ${isVisible.home ? 'visible' : ''}`}>
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Available for opportunities
              </div>
              <h1 className="hero-name">
                <span className="name-line">Mandar</span>
                <span className="name-line">Ambulkar</span>
              </h1>
              <p className="hero-title">{personalInfo.title}</p>
              <p className="hero-bio">{personalInfo.bio.medium}</p>
              <p className="hero-tagline">{personalInfo.tagline}</p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => setActiveSection('projects')}>
                  <span>View Projects</span>
                  <span className="btn-arrow">→</span>
                </button>
                <button className="btn-secondary" onClick={() => setActiveSection('contact')}>
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-number">{projects.length}</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{personalInfo.stats.gpa}</span>
                <span className="stat-label">GPA</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{personalInfo.stats.publications}</span>
                <span className="stat-label">Publications</span>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className={`gui-section projects-section ${isVisible.projects ? 'visible' : ''}`}>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">A collection of my recent work and side projects</p>
            <div className="projects-grid">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="project-card glass-card"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="project-header">
                    <span className="project-date">{project.date}</span>
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link" title="GitHub">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.publication && (
                        <a href={project.publication} target="_blank" rel="noopener noreferrer" className="project-icon-link" title="Publication">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-desc">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className={`gui-section experience-section ${isVisible.experience ? 'visible' : ''}`}>
            <h2 className="section-title">Experience & Education</h2>
            <p className="section-subtitle">My professional journey and academic background</p>

            <div className="experience-grid">
              <div className="exp-column">
                <h3 className="exp-column-title">
                  <span className="column-icon">💼</span> Work Experience
                </h3>
                {experience.map((exp, i) => (
                  <div key={i} className="exp-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="exp-date">{exp.date}</span>
                    <h4 className="exp-title">{exp.title}</h4>
                    <p className="exp-subtitle">{exp.subtitle}</p>
                    <p className="exp-desc">{exp.description}</p>
                    {exp.publication && (
                      <a href={exp.publication} target="_blank" rel="noopener noreferrer" className="exp-link">
                        View Publication →
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="exp-column">
                <h3 className="exp-column-title">
                  <span className="column-icon">🎓</span> Education
                </h3>
                {education.map((edu, i) => (
                  <div key={i} className="exp-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="exp-date">{edu.date}</span>
                    <h4 className="exp-title">{edu.title}</h4>
                    <p className="exp-subtitle">{edu.subtitle}</p>
                    <p className="exp-desc">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className={`gui-section skills-section ${isVisible.skills ? 'visible' : ''}`}>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies and tools I work with</p>
            <div className="skills-grid">
              {Object.entries(skills).map(([key, items], catIndex) => (
                <div
                  key={key}
                  className="skill-category glass-card"
                  style={{ animationDelay: `${catIndex * 0.1}s` }}
                >
                  <h3 className="skill-category-title">
                    {skillCategories[key].icon} {skillCategories[key].name}
                  </h3>
                  <div className="skill-tags">
                    {items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="skill-tag" 
                        style={{ animationDelay: `${(catIndex * 0.1) + (i * 0.03)}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hobbies Section */}
        {activeSection === 'hobbies' && (
          <section className={`gui-section hobbies-section ${isVisible.hobbies ? 'visible' : ''}`}>
            <h2 className="section-title">Hobbies & Interests</h2>
            <p className="section-subtitle">What I do when I'm not coding</p>
            <div className="hobbies-grid">
              {hobbies.map((hobby, i) => (
                <div
                  key={i}
                  className="hobby-card glass-card"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="hobby-icon">{hobby.icon}</div>
                  <h3 className="hobby-title">{hobby.name}</h3>
                  <p className="hobby-desc">{hobby.description}</p>
                </div>
              ))}
            </div>
            <div className="hobbies-tagline glass-card">
              <p>💡 Pro tip: The best debugging happens after a good badminton session!</p>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className={`gui-section contact-section ${isVisible.contact ? 'visible' : ''}`}>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">Let's connect and build something amazing</p>
            <div className="contact-content glass-card">
              <p className="contact-intro">
                I'm always open to discussing new opportunities, collaborations, 
                or just chatting about technology. Feel free to reach out!
              </p>
              <div className="contact-links">
                {Object.entries(socialLinks).map(([key, link]) => (
                  <a 
                    key={key}
                    href={link.url} 
                    target={key !== 'email' ? '_blank' : undefined}
                    rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                    className="contact-link"
                  >
                    <span className="contact-icon">{link.icon}</span>
                    <div className="contact-link-content">
                      <span className="contact-link-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      <span className="contact-link-value">{link.display}</span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="contact-location">
                <span className="contact-icon">📍</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="contact-cta">
                <p>Open to: Full-time roles, collaborations, and badminton matches! 🏸</p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer hint */}
      <div className="gui-footer">
        <span>Tip: Try Dev Mode for a terminal experience with hidden easter eggs 🎮</span>
      </div>
    </div>
  );
};

export default GUI;
