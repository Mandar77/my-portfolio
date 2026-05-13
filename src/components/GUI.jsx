import React, { useState, useEffect } from 'react';
import {
  FaHouse, FaBriefcase, FaListCheck, FaScrewdriverWrench,
  FaFileLines, FaTableTennisPaddleBall, FaEnvelope,
  FaGraduationCap, FaGithub, FaLinkedin, FaInstagram,
  FaXTwitter, FaLocationDot, FaArrowUpRightFromSquare,
  FaCamera, FaPlane, FaLightbulb, FaFilePdf, FaDownload,
  FaArrowRight, FaTrophy, FaNewspaper, FaPlay, FaMedal
} from 'react-icons/fa6';
import { timelineData } from '../data/timeline';
import { skillsData, skillCategories } from '../data/skills';
import { personalInfo, hobbies, socialLinks } from '../data/personal';
import { achievements, badmintonVideos } from '../data/achievements';
import '../styles/gui.css';

const mobileNavIcons = {
  home: FaHouse,
  projects: FaBriefcase,
  experience: FaListCheck,
  achievements: FaTrophy,
  skills: FaScrewdriverWrench,
  resume: FaFileLines,
  hobbies: FaTableTennisPaddleBall,
  contact: FaEnvelope,
};

const achievementCategoryIcons = {
  press: FaNewspaper,
  award: FaMedal,
};

const achievementCategoryLabels = {
  press: "Press",
  award: "Award",
};

const socialIcons = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  twitter: FaXTwitter,
};

const hobbyIcons = {
  Badminton: FaTableTennisPaddleBall,
  Photography: FaCamera,
  Travel: FaPlane,
};

const GUI = ({ onModeSwitch }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  const sections = ['home', 'projects', 'experience', 'achievements', 'skills', 'resume', 'hobbies', 'contact'];

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
        {sections.map(section => {
          const Icon = mobileNavIcons[section];
          return (
            <button
              key={section}
              className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
              aria-label={section}
            >
              <Icon />
            </button>
          );
        })}
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
                  <FaArrowRight className="btn-arrow" aria-hidden="true" />
                </button>
                <button className="btn-secondary" onClick={() => setActiveSection('resume')}>
                  <FaFilePdf className="btn-icon-inline" aria-hidden="true" />
                  <span>View Resume</span>
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
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link" title="GitHub" aria-label="GitHub repository">
                          <FaGithub />
                        </a>
                      )}
                      {project.publication && (
                        <a href={project.publication} target="_blank" rel="noopener noreferrer" className="project-icon-link" title="Publication" aria-label="View publication">
                          <FaFileLines />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-desc">{project.description}</p>
                  {project.tech && project.tech.length > 0 && (
                    <div className="project-tech">
                      {project.tech.map((t, ti) => (
                        <span key={ti} className="project-tech-chip">{t}</span>
                      ))}
                    </div>
                  )}
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
                  <FaBriefcase className="column-icon" aria-hidden="true" />
                  <span>Work Experience</span>
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
                  <FaGraduationCap className="column-icon" aria-hidden="true" />
                  <span>Education</span>
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

        {/* Achievements Section */}
        {activeSection === 'achievements' && (
          <section className={`gui-section achievements-section ${isVisible.achievements ? 'visible' : ''}`}>
            <h2 className="section-title">Achievements & Recognition</h2>
            <p className="section-subtitle">Press features, awards, and a few highlights from the badminton court</p>

            <div className="achievements-grid">
              {achievements.map((a, i) => {
                const Icon = achievementCategoryIcons[a.category];
                return (
                  <a
                    key={i}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-card glass-card"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="achievement-header">
                      <span className={`achievement-badge achievement-badge-${a.category}`}>
                        <Icon className="achievement-badge-icon" aria-hidden="true" />
                        {achievementCategoryLabels[a.category]}
                      </span>
                      <span className="achievement-date">{a.date}</span>
                    </div>
                    <h3 className="achievement-title">{a.title}</h3>
                    <p className="achievement-source">{a.source}</p>
                    {a.description && <p className="achievement-desc">{a.description}</p>}
                    <span className="achievement-link">
                      Read more
                      <FaArrowUpRightFromSquare className="achievement-link-icon" aria-hidden="true" />
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="badminton-section glass-card">
              <div className="badminton-header">
                <FaTableTennisPaddleBall className="badminton-icon" aria-hidden="true" />
                <div>
                  <h3 className="badminton-title">Badminton Match Highlights</h3>
                  <p className="badminton-subtitle">A few clips from Bay Area tournaments</p>
                </div>
              </div>
              <div className="badminton-grid">
                {badmintonVideos.map((videoId, i) => (
                  <a
                    key={videoId}
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badminton-video"
                    aria-label={`Badminton match highlight ${i + 1}`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      className="badminton-thumb"
                    />
                    <span className="badminton-play">
                      <FaPlay aria-hidden="true" />
                    </span>
                    <span className="badminton-label">Match {i + 1}</span>
                  </a>
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
              {Object.entries(skillsData).map(([key, items], catIndex) => {
                const CategoryIcon = skillCategories[key].icon;
                return (
                  <div
                    key={key}
                    className="skill-category glass-card"
                    style={{ animationDelay: `${catIndex * 0.1}s` }}
                  >
                    <h3 className="skill-category-title">
                      <CategoryIcon className="skill-category-icon" aria-hidden="true" />
                      <span>{skillCategories[key].name}</span>
                    </h3>
                    <div className="skill-tags">
                      {items.map((skill, i) => {
                        const Icon = skill.icon;
                        return (
                          <span
                            key={i}
                            className="skill-tag"
                            style={{
                              animationDelay: `${(catIndex * 0.1) + (i * 0.03)}s`,
                              '--skill-color': skill.color,
                            }}
                          >
                            <Icon className="skill-tag-icon" aria-hidden="true" />
                            <span>{skill.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Resume Section */}
        {activeSection === 'resume' && (
          <section className={`gui-section resume-section ${isVisible.resume ? 'visible' : ''}`}>
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle">View my full resume or download a copy</p>
            <div className="resume-actions">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaArrowUpRightFromSquare className="btn-icon-inline" aria-hidden="true" />
                <span>Open in New Tab</span>
              </a>
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="btn-secondary"
              >
                <FaDownload className="btn-icon-inline" aria-hidden="true" />
                <span>Download PDF</span>
              </a>
            </div>
            <div className="resume-viewer glass-card">
              <object
                data={personalInfo.resumeUrl}
                type="application/pdf"
                className="resume-pdf"
                aria-label="Mandar Ambulkar Resume"
              >
                <div className="resume-fallback">
                  <FaFilePdf className="resume-fallback-icon" aria-hidden="true" />
                  <p className="resume-fallback-text">
                    Your browser can't display the PDF inline.
                  </p>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Open Resume</span>
                    <FaArrowRight className="btn-arrow" aria-hidden="true" />
                  </a>
                </div>
              </object>
            </div>
          </section>
        )}

        {/* Hobbies Section */}
        {activeSection === 'hobbies' && (
          <section className={`gui-section hobbies-section ${isVisible.hobbies ? 'visible' : ''}`}>
            <h2 className="section-title">Hobbies & Interests</h2>
            <p className="section-subtitle">What I do when I'm not coding</p>
            <div className="hobbies-grid">
              {hobbies.map((hobby, i) => {
                const Icon = hobbyIcons[hobby.name];
                return (
                  <div
                    key={i}
                    className="hobby-card glass-card"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div className="hobby-icon">
                      {Icon ? <Icon aria-hidden="true" /> : hobby.icon}
                    </div>
                    <h3 className="hobby-title">{hobby.name}</h3>
                    <p className="hobby-desc">{hobby.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="hobbies-tagline glass-card">
              <p>
                <FaLightbulb className="tagline-icon" aria-hidden="true" />
                Pro tip: The best debugging happens after a good badminton session!
              </p>
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
                {Object.entries(socialLinks).map(([key, link]) => {
                  const Icon = socialIcons[key];
                  return (
                    <a
                      key={key}
                      href={link.url}
                      target={key !== 'email' ? '_blank' : undefined}
                      rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                      className="contact-link"
                    >
                      <Icon className="contact-icon" aria-hidden="true" />
                      <div className="contact-link-content">
                        <span className="contact-link-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <span className="contact-link-value">{link.display}</span>
                      </div>
                      {key !== 'email' && (
                        <FaArrowUpRightFromSquare className="contact-link-external" aria-hidden="true" />
                      )}
                    </a>
                  );
                })}
              </div>
              <div className="contact-location">
                <FaLocationDot className="contact-icon" aria-hidden="true" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="contact-cta">
                <p>Open to: Full-time roles, collaborations, and badminton matches! 🏸</p>
              </div>
            </div>
          </section>
        )}
      </main>

    </div>
  );
};

export default GUI;
