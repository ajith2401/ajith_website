import './App.css';
import MyNav from './components/Navbar';
import Skills from './components/Skills';
import Writing from './components/Writing';
import Experience from './components/Experience';
import PortfolioSection from './components/Portfolio';
// import myImage from '../src/aj1.png';
import ChatWidget from "./components/Chat.js"
import React, { useState } from 'react';

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
        return <Writing />;
      case 'PortfolioSection':
          return <PortfolioSection/>
        // PortfolioSection
      default:
        return <MyNav />;
    }
  };

  return (
    <div>
       <div id="myNav" className="overlay footer-basic_1">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>  
        <div className="overlay-content">
          <a href="#" onClick={() => handleNavigation('home',closeNav()) }>Home</a>
          <a href="#" onClick={() => handleNavigation('PortfolioSection',closeNav())}>Projects</a>
          <a href="#" onClick={() => handleNavigation('experience',closeNav())}>Experience</a>
          <a href="#" onClick={() => handleNavigation('writing',closeNav())}>Writing</a>
         
        </div>
        <div className="social">
            <a href="mailto:ajith24ram@gmailcom" target="_blank"><i class="icon ion-social-google"></i></a>
            <a href="https://www.linkedin.com/in/ajithkumar-rangappan-a6531a232" target='_blank'><i class="icon ion-social-linkedin"></i></a>
            <a href="https://github.com/ajith2401" target="_blank"><i class="icon ion-social-github"></i></a>
            <a href="#"><i class="icon ion-social-instagram"></i></a>
            <a href="https://www.facebook.com/putinakkavi" target="_blank"><i class="icon ion-social-facebook"></i></a>

        </div>

      </div>
      <div id='nav-icon'>
        <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
        <button onClick={handleResumeClick}>Resume</button>
      </div>
    
      {/* Render the current page */}
      {renderPage()}
      <div className="footer-basic">
      <footer>
        <div className="social">
            <a href="mailto:ajith24ram@gmailcom" target="_blank"><i class="icon ion-social-google"></i></a>
            <a href="https://www.linkedin.com/in/ajithkumar-rangappan-a6531a232" target='_blank'><i class="icon ion-social-linkedin"></i></a>
            <a href="https://github.com/ajith2401" target="_blank"><i class="icon ion-social-github"></i></a>
            <a href="#"><i class="icon ion-social-instagram"></i></a>
            <a href="https://www.facebook.com/putinakkavi" target="_blank"><i class="icon ion-social-facebook"></i></a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item" onClick={() => handleNavigation('home')}>Home</li>
          <li className="list-inline-item" onClick={() => handleNavigation('PortfolioSection')}>Projects</li>
          <li className="list-inline-item" onClick={() => handleNavigation('experience')}>Experience</li>
          <li className="list-inline-item" onClick={() => handleNavigation('writing')}>Writing</li>
         
        </ul>
        <p className="text-center">Company Name &copy; 2018</p>
      </footer>
    </div>
    <ChatWidget/>
    </div>
  );
};

export default App;
