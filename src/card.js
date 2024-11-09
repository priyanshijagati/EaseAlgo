import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="explore-button">Explore</button>
    </div>
  );
};

export default Card;
