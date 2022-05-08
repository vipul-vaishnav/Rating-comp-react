import React from 'react';

const Input = ({ value }) => {
  return (
    <div className="card-form-input">
      <label>
        {value}
        <input type="radio" name="one" hidden />
      </label>
    </div>
  );
};

export default Input;
