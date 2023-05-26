import './App.css';
import MyNav from './components/Navbar';
import WritingsComponent from './components/Writing';
import Experience from './components/Experience';
import PortfolioSection from './components/Portfolio';
import WritingDetailsComponent from './components/Cardpage';
import ChatWidget from "./components/Chat.js"
import React, { useState } from 'react';
import writingsData from './writings_ajith.json';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const writings = writingsData;

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.height = "0%";
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    closeNav();
  };

  const handleResumeClick = () => {
    const link = document.createElement("a");
    const resumeUrl = "https://drive.google.com/file/d/10lHtkWE_KsGnLE5_sXslKZBhMdJLtjUl/view?usp=drivesdk";
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Router>
      <div>
        <div id="myNav" className="overlay footer-basic_1">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <div className="overlay-content">
            <Link to="/" onClick={() => handleNavigation('home')}>Home</Link>
            <Link to="/PortfolioSection" onClick={() => handleNavigation('PortfolioSection')}>Works</Link>
            <Link to="/experience" onClick={() => handleNavigation('experience')}>Experience</Link>
            <Link to="/writing" onClick={() => handleNavigation('writing')}>Writing</Link>
          </div>
          <div className="social">
            <a href="mailto:ajith24ram@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-google"></i></a>
            <a href="https://www.linkedin.com/in/ajithkumar-rangappan-a6531a232" target='_blank' rel="noopener noreferrer"><i className="icon ion-social-linkedin"></i></a>
            <a href="https://github.com/ajith2401" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-github"></i></a>
            <a href="#"><i className="icon ion-social-instagram"></i></a>
            <a href="https://www.facebook.com/putinakkavi" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-facebook"></i></a>
          </div>
        </div>
        <div id='nav-icon'>
          <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
          <button onClick={handleResumeClick}>Resume</button>
        </div>

        <Switch>
          <Route exact path="/">
            <MyNav />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route exact path="/writing">
            <WritingsComponent writings={writings} />
          </Route>
          <Route path="/writings/:writingId">
            <WritingDetailsComponent writings={writings} />
          </Route>
          <Route path="/PortfolioSection">
            <PortfolioSection />
          </Route>
        </Switch>

        <div className="footer-basic">
          <footer>
            <div className="social">
              <a href="mailto:ajith24ram@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-google"></i></a>
              <a href="https://www.linkedin.com/in/ajithkumar-rangappan-a6531a232" target='_blank' rel="noopener noreferrer"><i className="icon ion-social-linkedin"></i></a>
              <a href="https://github.com/ajith2401" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-github"></i></a>
              <a href="#"><i className="icon ion-social-instagram"></i></a>
              <a href="https://www.facebook.com/putinakkavi" target="_blank" rel="noopener noreferrer"><i className="icon ion-social-facebook"></i></a>
            </div>
            <ul className="list-inline">
              <li><Link to="/" onClick={() => handleNavigation('home')}>Home</Link></li>
              <li><Link to="/PortfolioSection" onClick={() => handleNavigation('PortfolioSection')}>Works</Link></li>
              <li><Link to="/experience" onClick={() => handleNavigation('experience')}>Experience</Link></li>
              <li><Link to="/writing" onClick={() => handleNavigation('writing')}>Writing</Link></li>
            </ul>
            <p className="text-center">Ajithkumar &copy; 2023</p>
          </footer>
        </div>
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
