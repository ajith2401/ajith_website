import React, { useState, useEffect } from 'react';
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
  const [contentLanguage, setContentLanguage] = useState('english');
  const [contentIndex, setContentIndex] = useState(0);

  const content = [
    {
      english: "I am grateful for this page, which allows me to express myself freely. It is a platform for my creativity and imagination. I can express love,lust, child within, named and  nameless emotions as a writer,a creator without boundaries. I am thankful for the opportunity to use this page to express my individuality.please not to look for any qualities of an employee here.",
      tamil: "இது தனி மனத சுதந்திரத்துக்கு உட்பட்ட பக்கம். அதாவது எனக்குள்ளிருக்கிற எழுத்தாளரின், படைப்பாளியின், குழந்தைமையின், காதலின், காமத்தின் மற்றும் பெயருள்ள பெயரற்ற எல்லா உணர்வுகளின் வெளிப்பாட்டு தளம் இது. எனவே, இங்கு ஒரு தொழிலாளிக்கான எதையும் தேடாதீர்கள்."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentLanguage((prevLanguage) => (prevLanguage === 'english' ? 'tamil' : 'english'));
      setContentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000); // Change language every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
      <div className="disclaimer-content">
        <p className="alert alert-info">{content[contentIndex][contentLanguage]}</p>
      </div>
      <div className="filter-section">
        <div className="filter-item">
          <label>
            Category:
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="">All</option>
              <option value="short story">சிறுகதை-Short Story</option>
              <option value="poem">கவிதை-Poem</option>
              <option value="article">கட்டுரை-Article</option>
              <option value="philosophy">தத்துவம்-Philosophy</option>
              <option value="short writings">துணுக்குள்-short writings</option>
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
            <div className="search-wrapper">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Enter text to search"
                className="search-input"
              />
              {searchText && (
                <button className="undo-button" onClick={() => setSearchText('')}>
                  Undo
                </button>
              )}
            </div>
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
