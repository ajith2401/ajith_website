import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const WritingDetailsComponent = ({ writings }) => {
  const { writingId } = useParams();
  const writing = writings.find((writing) => writing.id.toString() === writingId);
  const [showFullContent, setShowFullContent] = useState(false);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [comment, setComment] = useState('');

  if (!writing) {
    return <div>Writing not found</div>;
  }

  const renderContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
  
    if (!name || !mail || !comment) {
      // Display an error message or perform some other action
      return;
    }
    const newComment = {
      name: name,
      mail_id: mail,
      content: comment,
      date: new Date().toISOString(),
      writingId: writing.id,
      writingTitle: writing.title,
    };
  
    // Make an API request to the server-side endpoint
    axios.post('https://kuralbot.pythonanywhere.com/comments', newComment)
      .then((response) => {
        console.log('Comment stored:', response.data);
        setName('');
        setMail('');
        setComment('');
      })
      .catch((error) => {
        console.error('Error storing comment:', error);
      });
  };

  return (
    <div className="container">
      <h1>{writing.title}</h1>
      <p className="card-text">
        {renderContent(writing.content_body)}
      </p>

      <div className="row">
        <div className="col-lg-3 mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name"
          />
        </div>
        <div className="col-lg-3 mb-3">
          <input
            type="text"
            className="form-control"
            value={mail}
            onChange={handleMailChange}
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-3">
          <textarea
            className="form-control"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <button className="btn btn-primary" onClick={handleSubmitComment}>Submit</button>
        </div>
      </div>

      <Link to="/writing">Back to Writings</Link>
    </div>
  );
};

export default WritingDetailsComponent;
