import React, { useRef } from 'react';
import { useMediaQuery } from "@mui/material";
import {
  Box,
  Container,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import WidgetWrapper from './Widget';
function Experience() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
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
  const experienceRef = useRef(null);
  return (
    <Container id="experience" className="mt-3">
    <Box >
      <Box>
          <Typography variant="h1" textAlign={'center'}>Experience</Typography>
      </Box>
      <Box className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {experience.map((exp, index) => (
          <Box className="col" key={index}>
            <WidgetWrapper className="h-100">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  {exp.company}
                </Typography>
                <Typography variant="body1" component="p">
                  {exp.desc}
                </Typography>
                <List>
                  <ListItem>
                    <strong>Date:</strong> {exp.date}
                  </ListItem>
                  <ListItem>
                    <strong>Tech Stack:</strong>
                    <Box className="tech-stack-container">
                      {exp.techStack.map((item, i) => (
                        <Button
                          key={i}
                          className="btn btn-tech-stack"
                          variant="outlined"
                          size="small"
                        >
                          {item}
                        </Button>
                      ))}
                    </Box>
                  </ListItem>
                </List>
              </CardContent>
            </WidgetWrapper>
          </Box>
        ))}
      </Box>
    </Box>
    </Container>
  );
};

export default Experience;

