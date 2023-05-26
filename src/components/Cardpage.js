import React from 'react';
import { useParams } from 'react-router-dom';

const CardPage = () => {
  const { id } = useParams();

  // Retrieve the card details based on the ID and render the full content

  return (
    <div>
      <h2>Card Page</h2>
      <p>Card ID: {id}</p>
      {/* Render the full content of the card */}
    </div>
  );
};

export default CardPage;
