import React, { useState, useEffect } from 'react';
import ChatW from '../chat_w2.png'

function ChatWidget() {
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
    let day = date.toLocaleDateString('en-US', {weekday: 'long'});
    let month = date.toLocaleDateString('en-US', {month: 'long'});
    let dayNum = date.getDate();
    let year = date.getFullYear();
    return `${day}, ${month} ${dayNum}, ${year} ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
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
    <div className="chat-widget">
      {!isOpen && (
      <>
      <img src={ChatW} className="open-chat-button" onClick={handleOpenChat} alt="Chat" />
      <span className={`button-text${animateText ? ' animate' : ''}`}>Ask something</span>
    </>
      )}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Chat</h4>
            <button className="close-chat-button" onClick={handleCloseChat}>Close</button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message${message.isBot ? ' bot-message' : ' user-message'}`}>
                <span className="chat-message-text">{message.text}</span>
                <span className="chat-message-time small-text">{message.time}</span>
              </div>
            ))}
          </div>
          <form className="chat-input" onSubmit={getBotResponse}>
            <input type="text" name="msg" placeholder="Type your message..." />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatWidget;
