import React from 'react';

const Input = ({ value, id, handleChange, selected }) => {
  return (
    <li className="card-form-input">
      <input
        type="radio"
        name="rating"
        id={id}
        value={value}
        onChange={handleChange}
        checked={selected === value}
        hidden
      />
      <label htmlFor={id}>{value}</label>
    </li>
  );
};

export default Input;
