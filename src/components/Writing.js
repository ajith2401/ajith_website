import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import WritingDetailsComponent from './Cardpage';

const WritingsComponent = ({ writings }) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [showFullContent, setShowFullContent] = useState(Array(writings.length).fill(false));
  const [visibleCards, setVisibleCards] = useState(24);

  // Filtered writings based on category, published date, and search text
  const filteredWritings = writings
    .filter((writing) => {
      if (categoryFilter && writing.category !== categoryFilter) {
        return false;
      }

      if (dateFilter) {
        const filterDate = new Date(dateFilter);
        const writingDate = new Date(writing.published_date);
        if (
          writingDate.getDate() !== filterDate.getDate() ||
          writingDate.getMonth() !== filterDate.getMonth() ||
          writingDate.getFullYear() !== filterDate.getFullYear()
        ) {
          return false;
        }
      }

      if (searchText) {
        const lowerCaseSearchText = searchText.toLowerCase();
        const lowerCaseTitle = writing.title.toLowerCase();
        const lowerCaseContent = writing.content_body.toLowerCase();
        if (
          !lowerCaseTitle.includes(lowerCaseSearchText) &&
          !lowerCaseContent.includes(lowerCaseSearchText)
        ) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date)); // Sort by latest published date

  const toggleContent = (writingId) => {
    setShowFullContent((prevState) => {
      const index = filteredWritings.findIndex((writing) => writing.id === writingId);
      if (index === -1) return prevState;

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

  const renderContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);
  };

  const loadMore = () => {
    setVisibleCards((prevCount) => prevCount + 24);
  };

  return (
    <div className="intro text-center section-padding color-bg" id="about">
      <h2>Writings</h2>
      <div className="filter-section">
        <div className="filter-item">
          <label>
            Category:
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="">All</option>
              <option value="short story">Short Story</option>
              <option value="poem">Poem</option>
              <option value="article">Article</option>
              <option value="philosophy">Philosophy</option>
            </select>
          </label>
        </div>
        <div className="filter-item">
          <label>
            Published Date:
            <DatePicker
              selected={dateFilter}
              onChange={(date) => setDateFilter(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
              isClearable
            />
          </label>
        </div>
        <div className="filter-item">
          <label>
            Search:
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Enter text to search"
            />
          </label>
        </div>
      </div>
      <hr />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredWritings.slice(0, visibleCards).map((writing) => (
          <div className="col" key={writing.id}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">{writing.title}</h3>
                <p className="card-text">
                  {showFullContent[writing.id]
                    ? renderContent(writing.content_body)
                    : truncatedContent(writing.content_body)}
                </p>
                {writing.content_body.split('\n').length > 4 && (
                  <Link
                    to={`/writings/${writing.id}`}
                    className="btn btn-primary"
                    onClick={() => toggleContent(writing.id)}
                  >
                    {showFullContent[writing.id] ? 'Read Less' : 'Read More'}
                  </Link>
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
      {filteredWritings.length > visibleCards && (
        <button className="btn btn-primary mt-3" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default WritingsComponent;
