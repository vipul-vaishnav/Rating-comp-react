import React from 'react';

const Button = ({ isDisabled }) => {
  return (
    <button type="submit" className="btn btn-primary" disabled={isDisabled}>
      Submit
    </button>
  );
};

export default Button;
