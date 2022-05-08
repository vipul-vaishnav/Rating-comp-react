import React from 'react';
import Star from '../images/icon-star.svg';
import Form from './Form';

const Card = () => {
  return (
    <div className="card">
      <div className="card-star">
        <img src={Star} alt="Star" />
      </div>
      <h1 className="card-title">How did we do?</h1>
      <p className="card-description">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>
      <Form />
    </div>
  );
};

export default Card;
