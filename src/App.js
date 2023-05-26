import './App.css';
import MyNav from './components/Navbar';
import WritingsComponent from './components/Writing';
import Experience from './components/Experience';
import PortfolioSection from './components/Portfolio';
import WritingDetailsComponent from './components/Cardpage'; // Import the WritingDetailsComponent
import ChatWidget from "./components/Chat.js"
import React, { useState } from 'react';
import writingsData from './writings_ajith.json';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const writings = writingsData;

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleResumeClick = () => {
    // Trigger resume download using the retrieved resume URL
    const link = document.createElement("a");
    const resumeUrl = "https://drive.google.com/file/d/10lHtkWE_KsGnLE5_sXslKZBhMdJLtjUl/view?usp=drivesdk"
    link.href = resumeUrl;
    link.download = "resume.pdf"; // Replace with the desired filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <MyNav />;
      case 'experience':
        return <Experience />;
      case 'writing':
        return <WritingsComponent writings={writings} />;
      case 'PortfolioSection':
        return <PortfolioSection />;
      default:
        return <MyNav />;
    }
  };

  return (
    <div>
      <div id="myNav" className="overlay footer-basic_1">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <div className="overlay-content">
          <a href="/" onClick={() => handleNavigation('home', closeNav())}>Home</a>
          <a href="/PortfolioSection" onClick={() => handleNavigation('PortfolioSection', closeNav())}>Works</a>
          <a href="/experience" onClick={() => handleNavigation('experience', closeNav())}>Experience</a>
          <a href="/writing" onClick={() => handleNavigation('writing', closeNav())}>Writing</a>
        </div>
        <div className="social">
          <a href="mailto:ajith24ram@gmailcom" target="_blank"><i className="icon ion-social-google"></i></a>
          <a href="https://www.linkedin.com/in/ajithkumar-rangappan-a6531a232" target='_blank'><i className="icon ion-social-linkedin"></i></a>
          <a href="https://github.com/ajith2401" target="_blank"><i className="icon ion-social-github"></i></a>
          <a href="#"><i className="icon ion-social-instagram"></i></a>
          <a href="https://www.facebook.com/putinakkavi" target="_blank"><i className="icon ion-social-facebook"></i></a>
        </div>
      </div>
      <div id='nav-icon'>
        <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
        <button onClick={handleResumeClick}>Resume</button>
      </div>

      <Router>
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
      </Router>

      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="mailto:ajith24ram@gmailcom" target="_blank"><i className="icon ion-social-google"></i></a>
            <a href="https://www.linkedin.com/in/ajithkumar-rangappan-a6531a232" target='_blank'><i className="icon ion-social-linkedin"></i></a>
            <a href="https://github.com/ajith2401" target="_blank"><i className="icon ion-social-github"></i></a>
            <a href="#"><i className="icon ion-social-instagram"></i></a>
            <a href="https://www.facebook.com/putinakkavi" target="_blank"><i className="icon ion-social-facebook"></i></a>
          </div>
          <ul className="list-inline">
          <li><a href="/" onClick={() => handleNavigation('home', closeNav())}>Home</a></li>
          <li><a href="/PortfolioSection" onClick={() => handleNavigation('PortfolioSection', closeNav())}>Works</a></li>
          <li><a href="/experience" onClick={() => handleNavigation('experience', closeNav())}>Experience</a></li>
          <li><a href="/writing" onClick={() => handleNavigation('writing', closeNav())}>Writing</a></li>
          </ul>
          <p className="text-center">Company Name &copy; 2018</p>
        </footer>
      </div>
      <ChatWidget />
    </div>
  );
};

export default App;
