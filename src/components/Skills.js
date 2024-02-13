import React from "react";
import { useMediaQuery } from "@mui/material";

function Skills() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "ReactJS",
    "Node.js",
    "Express",
    "Git",
    "SQL",
    "Python",
    "Flask",
    "MongoDB",
  ];

  return (
    <div className="section container-fluid" id="Skills">
       <div className="text-body-loading">
      <h1>Skills</h1>
  </div>
      <div className='row skill-container' >
      {skills.map((skill, index) => (
        <div className="col-sm-4 skill" key={index}>
          {skill}
        </div>
        
      ))}
      </div>
    </div>
  );
}

export default Skills;
