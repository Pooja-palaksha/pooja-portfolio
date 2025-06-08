import React, { useState, useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import profileImage from './assets/images/profile.jpg';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skillset from './components/Skillset';
import Hobbies from './components/Hobbies';
import AboutMe from './components/AboutMe';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">Portfolio</a>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          <button className="menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi, I'm <span className="highlight">Pooja K P</span></h1>
              <h2>Full Stack Web Developer</h2>
              <p>I build exceptional digital experiences with modern technologies</p>
              <div className="cta-buttons">
                <a href="#projects" className="btn btn-secondary">View My Work</a>
              </div>
            </div>
            <div className="profile-image">
              <img src={profileImage} alt="Deeksha M B" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <div className="about-content">
            <div className="about-text">
              <AboutMe />
              <PersonalDetails />
              <Hobbies />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">My <span className="highlight">Education</span></h2>
          <Education />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <Skillset />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My <span className="highlight">Projects</span></h2>
          <div className="projects-grid">
            <Projects />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title">My <span className="highlight">Achievements</span></h2>
          <Achievements />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!</p>
              <div className="social-links">
                <a href="#" aria-label="GitHub"><FaGithub /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Email"><FaEnvelope /></a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;