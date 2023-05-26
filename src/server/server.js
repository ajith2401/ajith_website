const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const express = require('express');

const app = express();
app.use(cors());

app.use(express.json());

app.post('/api/comments', (req, res) => {
  const { name, mail_id, content, date, writingId, writingTitle } = req.body;

  const newComment = {
    name: name,
    mail_id: mail_id,
    content: content,
    date: date,
    writingId: writingId,
    writingTitle: writingTitle,
  };

  // Read the existing comments from the JSON file
  let comments = [];
  try {
    const data = fs.readFileSync('comments.json', 'utf8');
    comments = JSON.parse(data);
  } catch (err) {
    console.error('Error reading comments file:', err);
  }

  // Add the new comment to the array
  comments.push(newComment);

  // Write the updated comments back to the JSON file
  try {
    const jsonData = JSON.stringify(comments);
    fs.writeFileSync('comments.json', jsonData, 'utf8');
  } catch (err) {
    console.error('Error writing comments file:', err);
  }

  // Send a response to the client
  res.status(200).json({ message: 'Comment stored', comment: newComment });
});

module.exports = app;
