import React from "react";


function Achievements() {
  const achievements = [
    {
    title:"SEVAI BOT",
    achievement_link : "https://wa.me/9445879944",
    ache_desc: ["Winner of GovTechThan, initiated by the Tirunelveli District Administration to encourage the innovations in technology where more than 520 teams participated.",
    "Our Virtual Ass,istant Chatbot for Government Schemes won 1-lakh cash prize and bootcamped to become a full-time working product.",
   "BOT was successfully launched by Honourable Tamil Nadu IT Minister"],
     Tech_Stack:["The Hindu.", "The New Indian Express"],
     tech_link:["https://www.thehindu.com/news/cities/Madurai/whatsapp-based-chatbot-introduced-in-tirunelveli-to-take-welfare-schemes-to-public/article66342104.ece","https://www.newindianexpress.com/states/tamil-nadu/2022/jul/10/coming-soon-a-virtual-assistant-makkalnalambot-for-info-ongovernment-schemes-2474843.html"]
    },
    {
      title:"KURAL BOT",
      achievement_link : "https://t.me/Kural_book_bot",
      ache_desc: ["Successfully built a telegram and whatsapp chatbot which gives Thirukkural and its context when user enters a random number within 1330",
    "It will suggest books based on user selected categories like short stories, novels etc." ],
    Tech_Stack: ["Python", "Flask" , " dialogflow", "JSON"]
    },
    {
      title: "AUTHOR",
      achievement_link : "https://youtu.be/4TYQvODzTI0",
      ache_desc: ["Published four poetry books under the themes of feminism, social justice and love."],
      Tech_Stack: ["Feminism", "Social justice" , "Love", "Equality"]
    },
    {
      title: "LYRICSTIRST AND DIRECTOR",
      achievement_link : "https://youtu.be/4TYQvODzTI0",
      ache_desc: ["Published four poetry books under the themes of feminism, social justice and love."],
      Tech_Stack: ["நாளும் புதிது", "தாலாட்டு",
      "அன்பின் கீர்த்தனை", "காட்டுச் சிறுக்கி"],
      tech_link : ["https://youtu.be/CC_1fzAUmUc", "https://youtu.be/3YlqopnlVXA","https://youtu.be/TWW-VgZMrYs","https://youtu.be/zGxt7DU9Sl4"]
    }
  ,
  ];

  return (
    <div className="section container-fluid mt-3" id="Achievements">
     <div className="text-body-loading">
       <div className="waviy-loading">
          <span style={{ "--i": 1 }}>A</span>
          <span style={{ "--i": 2 }}>C</span>
          <span style={{ "--i": 3 }}>H</span>
          <span style={{ "--i": 4 }}>I</span>
          <span style={{ "--i": 5 }}>V</span>
          <span style={{ "--i": 6 }}>E</span> 
          <span style={{ "--i": 7 }}>M</span> 
          <span style={{ "--i": 8 }}>E</span>
          <span style={{ "--i": 9 }}>N</span> 
          <span style={{ "--i": 10 }}>T</span> 
          <span style={{ "--i": 10 }}>S</span> 
          </div>
  </div>
  <div className="container-fluid">
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {achievements.map((achievement, index) => (
      <div className="col mb-4" key={index}>
        <div className="card h-100">
          <div className="card-body">
            <h3 className="card-title">{achievement.title}</h3>
            <hr className="mb-3" />
            <div className="desc-wrapper">
              <ul className="list-unstyled">
                {achievement.ache_desc.map((item, index) => (
                  <li className="mb-2" key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="tech-stack-wrapper mb-3">
              <ul className="list-inline">
                {achievement.Tech_Stack.map((item, index) => (
                  <li className="list-inline-item me-3" key={index}>
                    <button className="btn btn-secondary" onClick={() => window.open(achievement.tech_link && achievement.tech_link.length > index ? achievement.tech_link[index] : '#', '_blank')}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default Achievements;
