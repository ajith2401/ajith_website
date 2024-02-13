import React, { useState, useEffect } from 'react';
import ChatW from '../chat_w2.png'
import { useMediaQuery } from "@mui/material";
import {  IconButton, TextField, Paper, Typography, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function ChatWidget() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimateText(true);

      const animationTimer = setTimeout(() => {
        setAnimateText(false);
      }, 1000); // Adjust the duration as needed

      return () => {
        clearTimeout(animationTimer);
      };
    }
  }, [isOpen]);
  function getDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
  
    // let day = date.toLocaleDateString('en-US', { weekday: 'long' });
    // let month = date.toLocaleDateString('en-US', { month: 'long' });
    // let dayNum = date.getDate();
    // let year = date.getFullYear();
  
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;
  }
  
  
  function getBotResponse(event) {
    event.preventDefault(); // Prevents page refresh on form submit
    const rawText = event.target.elements.msg.value;
    const userMessage = { text: rawText, time: getDate(new Date()), isBot: false };
    setMessages([...messages, userMessage]);
    fetch('https://kuralbot.pythonanywhere.com/message-bot?msg=' + rawText)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const botResponse = {
          text: data.response.fulfillment,
          time: getDate(new Date()),
          isBot: true
        };
        
        console.log(botResponse)
        setMessages(prevMessages => [...prevMessages, botResponse]);
      });
    event.target.reset(); // Clear the input field after submit
  }
  
  function handleOpenChat() {
    setIsOpen(true);
  }

  function handleCloseChat() {
    setIsOpen(false);
  }

  function handleSendMessage(message) {
    setMessages([...messages, message]);
  }

  return (
      <div>
        {!isOpen && (
          <>
          <IconButton onClick={handleOpenChat} style={{ position: 'fixed', bottom: 20, right: 5, zIndex: 1000, fontSize: '1.5rem' }}>
          <img src={ChatW} width={isNonMobileScreens ? '100px' : '70px'} alt="Chat" />
        </IconButton>
            
          </>
        )}
        {isOpen && (
          <Paper style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000, width: 300 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
              <Typography variant="h6">Chat</Typography>
              <Button className="close-chat-button" onClick={handleCloseChat} style={{ backgroundColor: 'transparent', color: '#fff', fontSize: '1.2rem' }}>Close</Button>
            </div>
            <div style={{ height: '200px', overflowY: 'scroll', padding: '10px' }}>
              {messages.map((message, index) => (
                <div key={index} style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', backgroundColor: message.isBot ? '#bebebe' : '#f2f2f2' }}>
                  <span>{message.text}</span>
                  <span style={{ fontSize: '0.8rem' }}>{message.time}</span>
                </div>
              ))}
            </div>
            <form onSubmit={getBotResponse} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderTop: '1px solid #ccc' }}>
              <TextField type="text" name="msg" placeholder="Type your message..." fullWidth />
              <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>Send</Button>
            </form>
          </Paper>
        )}
      </div>
    );
  }

export default ChatWidget;
