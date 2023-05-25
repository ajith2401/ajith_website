import React from 'react';

function Experience() {
  const experience = [
    {
      title: "FULL STACK DEVELOPER",
      company: "CANOPI INDIA PRIVATE LIMITED",
      date: "APR 2023 - present",
      desc:
        "Developed a comprehensive web and WhatsApp chatbot solution for automating bank-side services. The chatbot effectively communicates with users in English, Hindi, and Tamil languages. Additionally, created APIs for seamless WhatsApp notification delivery to users.",
      techStack : [ "HTML", "CSS", "JavaScript", "Python"]
    },
    {
      title: "BACKEND DEVELOPER",
      company: "MOCERO HEALTH SOLUTIONS",
      date: "SEP 2022- MAR 2023",
      desc:
        "Single handedly built a web and whatsapp chatbot to automate the healthcare services which communicates both in English and Tamil for the user. Managed to create a data base of 19000 users using web scraping and data framing in python.Known for my collaborating skills as a backend developer with real time experience in data scraping API development, integration and data framing",
      techStack : [ "HTML", "CSS", "JavaScript", "Python"]
    },
    {
      title: "TECH INTERN",
      company: "TIRUNELVELI COLLECTORATE",
      date: "MAY 2022-AUG 2022",
      desc:
        "Worked in a team which built the India's first whatsapp bot for public to provide information on various government schemes and policies.Worked closely with district administration to gather data required for the chatbot - Converted the telegram bot which was built as a proof of concept for Hackathon into production ready WhatsApp bot during the internship period",
      techStack : [ "HTML", "CSS", "JavaScript", "Python"]
    },
  ];

  return (
    <div className="section container-fluid" id="experience">
      <div className="text-body-loading">
       <div className="waviy-loading">
         <h1>Experience</h1> 
          </div>
  </div>
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {experience.map((exp, index) => (
    <div className="col" key={index}>
      <div className="card h-100">
        <div className="card-body">
          <h3 className="card-title">{exp.title}</h3>
          <h5 className="card-subtitle mb-2 text-muted">{exp.company}</h5>
          <p className="card-text">{exp.desc}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Date:</strong> {exp.date}</li>
            <li className="list-group-item">
              <strong>Tech Stack:</strong>
              <div className="tech-stack-container">
                {exp.techStack.map((item, i) => (
                  <button 
                    className="btn btn-tech-stack" 
                    key={i}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}

export default Experience;

