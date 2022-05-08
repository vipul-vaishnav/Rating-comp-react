import React from 'react';
import Image from '../images/illustration-thank-you.svg';

const CardState2 = ({ value }) => {
  return (
    <>
      {/* Thank you */}
      <section className="card-state2">
        <div className="card-illustration">
          <img src={Image} alt="" className="card-illustration-" />
        </div>
        <div className="card-rating-block">
          <p className="card-rating-text">You selected {value} out of 5</p>
        </div>
        <h1 className="card-greeting">Thank you!</h1>
        <p className="card-message">
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in
          touch!
        </p>
      </section>
    </>
  );
};

export default CardState2;
