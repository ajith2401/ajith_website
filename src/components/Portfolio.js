import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PortfolioSection = () => {
  const images = [
    {
      src: ["./images/sevai_bot_1.jpg","./images/sevai_bot_2.jpg","./images/sevai_bot_3.jpg"],
      title: "SEVAI BOT",
      achievement_link: "https://wa.me/9445879944",
      ache_desc: [
        "Our Virtual Assistant Chatbot, named MakkalNalamBot, designed specifically for government schemes, secured the top spot in the competition. This intelligent chatbot allows users to input their gender, age, and income details to receive tailored information about relevant schemes throughout the State.",
        "The culmination of our efforts was the successful launch of MakkalNalamBot, which was graced by the Honourable Tamil Nadu IT Minister. This launch event marked a significant milestone for our team and showcased the recognition and support we received for our innovative solution.",
      ],
      Tech_Stack: ["The Hindu.", "The New Indian Express"],
      tech_link: [
        "https://www.thehindu.com/news/cities/Madurai/whatsapp-based-chatbot-introduced-in-tirunelveli-to-take-welfare-schemes-to-public/article66342104.ece",
        "https://www.newindianexpress.com/states/tamil-nadu/2022/jul/10/coming-soon-a-virtual-assistant-makkalnalambot-for-info-ongovernment-schemes-2474843.html",
      ],
    },
    {
      src: ["./images/klb.jpg","./images/kural_bot_8.jpg","./images/kural_bot_9.jpg","./images/kural_bot_1.jpg","./images/kural_bot_3.jpg"],
      title: "KURAL BOT",
      achievement_link: "https://t.me/Kural_book_bot",
      ache_desc: [
        "Successfully built a Telegram and WhatsApp chatbot that provides Thirukkural and its context. When users enter a random number within the range of 1 to 1330, the chatbot retrieves the corresponding Thirukkural.",
       "The chatbot offers a book recommendation service where users can select their preferred categories, such as short stories, novels, and more. Based on the user's choice, the chatbot suggests relevant books that fall within the selected categories. This feature helps users discover new books and genres that align with their interests.chatbot is equipped with a basic question-answering capability. ",
       
      ],
      Tech_Stack: ["Python", "Flask", "dialogflow", "JSON"],
    },
    {
      src: ["./images/book_1.jpg","./images/book_2.jpg","./images/book_3.jpg","./images/book_4.jpg","./images/book_5.png"],
      title: "AUTHOR",
      achievement_link: "https://youtu.be/4TYQvODzTI0",
      ache_desc: [
        "As a passionate Tamil writer, I dedicate my creative endeavors to crafting compelling short stories, evocative poems, and insightful articles.I take immense pride in having published four poetry books that delve deep into the realms of feminism, social justice, and love.",
        "My literary works revolve around themes that hold great importance in our society. Feminism is a core aspect of my writing, as I strive to amplify women's voices, question gender stereotypes, and advocate for their rights and empowerment. Social justice is another crucial theme I explore, shedding light on various forms of inequality, discrimination, and systemic issues."
      ],
      Tech_Stack: ["Feminism", "Social justice", "Love", "Equality"],
    },
    {
      src: ["./images/yt_1.png","./images/yt_2.png","./images/yt_3.png","./images/yt_4.png","./images/yt_5.png","./images/yt_6.png"],
      title: "LYRICIST AND DIRECTOR",
      achievement_link: "https://youtu.be/4TYQvODzTI0",
      ache_desc: [
        "Published four poetry books under the themes of feminism, social justice, and love.",
      ],
      Tech_Stack: [
        "நாளும் புதிது",
        "தாலாட்டு",
        "அன்பின் கீர்த்தனை",
        "காட்டுச் சிறுக்கி",
      ],
      tech_link: [
        "https://youtu.be/CC_1fzAUmUc",
        "https://youtu.be/3YlqopnlVXA",
        "https://youtu.be/TWW-VgZMrYs",
        "https://youtu.be/zGxt7DU9Sl4",
      ],
    },
  ];

  return (
    <section id="portfolio">
    <div className="container mt-3">
      <h1 className="text-center">Works</h1>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-lg-6 mt-4 box-border" >
            <div className="card portfolioContent" style={{ height: "100%" }}>
              {Array.isArray(image.src) ? (
                <Carousel showThumbs={false} autoPlay infiniteLoop>
                  {image.src.map((src, i) => (
                    <div key={i}>
                      <img src={src} alt={`Slide ${i + 1}`} />
                    </div>
                  ))}
                </Carousel>
              ) : (
                <img src={image.src} alt="Image" />
              )}
              <div className="card-body">
                  <h4 className="card-title text-center">{image.title}</h4>
                  <ul className="card-text">
                    {image.ache_desc.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <a
                      href={image.achievement_link}
                      className="btn btn-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </div>
                  {image.Tech_Stack && image.Tech_Stack.length > 0 && (
                    <div>
                      <h5 className="mt-3">Key Points:</h5>
                      <ul>
                        {image.Tech_Stack.map((tech, i) => (
                          <li key={i}>
                            {tech}
                            {image.tech_link && image.tech_link[i] && (
                              <a
                                href={image.tech_link[i]}
                                className="ml-2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                (Learn more)
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
// /Users/ajithkumarr/Desktop/ajith_website/src/App.js