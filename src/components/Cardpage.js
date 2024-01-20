import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const WritingDetailsComponent = ({ writings }) => {
  const { writingId } = useParams();
  const writing = writings.find((writing) => writing.id.toString() === writingId);
  const [showFullContent, setShowFullContent] = useState(false);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');

  const fetchComments = async () => {
    try {
      const response = await axios.post('https://kuralbot.pythonanywhere.com/api/get_comments', {
        writingId: writingId,
        writingTitle: writing.title
      });
      console.log("writingId",writingId)
      console.log(writing.title)
      setComments(response.data);
      console.log(response.data)
      setError('');
    } catch (error) {
      console.error('Error fetching comments:', error);
      setComments([]);
      setError('Failed to fetch comments');
    }
  };

  useEffect(() => {
    fetchComments();
  }, [writingId, writing.title]);

  if (!writing) {
    return <div>Writing not found</div>;
  }
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((line, index) => (
        <React.Fragment key={index}>
          {line && line.toString()}
          <br />
        </React.Fragment>
      ));
    } else if (typeof content === 'string' || content instanceof String) {
      const lines = content.split('\n');
      return lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    } else {
      // Handle other cases if needed
      return null;
    }
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

    // Make an API request to store the comment
    axios.post('https://kuralbot.pythonanywhere.com/comments', newComment)
      .then((response) => {
        console.log('Comment stored:', response.data);
        setName('');
        setMail('');
        setComment('');
        // Fetch updated comments after successfully storing the new comment
        fetchComments();
      })
      .catch((error) => {
        console.error('Error storing comment:', error);
      });
  };

  return (
    <div className="container" id="card_page">
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

      <div className="comments-section">
      <h2>Comments</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div className="card mb-3" key={comment.id}>
        <div className="card-body">
          <h4 className="card-title">{comment.name}</h4>
          <p className="card-text">{comment.content}</p>
          <p className="card-text"><small className="text-muted">{comment.date}</small></p>
        </div>
      </div>
    ))
  ) : (
    <div className="alert alert-info">No comments available</div>
  )}
</div>


      <Link to="/writing">Back to Writings</Link>
    </div>
  );
};

export default WritingDetailsComponent;
