import React from 'react';
import myImage from '../aj1.png';

class MyNav extends React.Component {
  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <div id='Home'>
        <div id='name_img'>
          <div>
            <h1 id='name'>Hi, my name is <b>Ajithkumar</b></h1>
            <div id='about-content'>
              <p>Experienced Backend developer and GovTechThon award holder seeking full- stack developer role in a dynamic work culture. I am looking forward to work on diverse projects that provide opportunities for my professional growth and foster collaboration with multidisciplinary teams with experience in python, flask, node.js, react and javascript.</p>
            
        </div>
          
          </div>
          <img id='image_aji' src={myImage} alt="Description of the image" />
        </div>
        
   </div>
    );
  }
}

export default MyNav;
