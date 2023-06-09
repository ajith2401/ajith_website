import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



const WritingsComponent = ({ writings }) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [showFullContent, setShowFullContent] = useState([]);
  const [visibleCards, setVisibleCards] = useState(24);
  const history = useHistory();

  // Filtered writings based on category and published date
  const filteredWritings = writings.filter((writing) => {
    if (categoryFilter && writing.category !== categoryFilter) {
      return false;
    }

    if (dateFilter && writing.published_date !== dateFilter) {
      return false;
    }

    return true;
  });

  const toggleContent = (index) => {
    setShowFullContent((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !prevState[index];
      return updatedState;
    });
  };

  const truncatedContent = (content) => {
    const maxLines = 4;
    const lines = content.split('\n');
    const truncatedLines = lines.slice(0, maxLines);
    return truncatedLines.join('\n');
  };

  const loadMore = () => {
    setVisibleCards((prevCount) => prevCount + 24);
  };

 

  const handleCardClick = (writing) => {
    // Navigate to a separate page with the full content of the card
    history.push(`/card/${writing.id}`);
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {filteredWritings.slice(0, visibleCards).map((writing, index) => (
        <div className="col" key={index}>
          <div className="card h-100" onClick={() => handleCardClick(writing)}>
            <div className="card-body">
              <h3 className="card-title">{writing.title}</h3>
              <p className="card-text">
                {showFullContent[index]
                  ? writing.content_body
                  : truncatedContent(writing.content_body)}
              </p>
              {writing.content_body.split('\n').length > 4 && (
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the card click event from firing
                    toggleContent(index);
                  }}
                >
                  {showFullContent[index] ? 'Read Less' : 'Read More'}
                </button>
              )}
            </div>
            <img src={writing.image_src} alt={writing.title} className="card-img-top" />
            <div className="card-footer">
              <p>Published Date: {writing.published_date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default WritingsComponent;
