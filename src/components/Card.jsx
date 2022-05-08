import React, { useState } from 'react';
import CardState1 from './CardState1';
import CardState2 from './CardState2';

const Card = () => {
  // For Rating
  const [selected, setSelected] = useState(null);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    handleState();
  };

  // For Rendering
  const [state, setState] = useState(true);
  const handleState = () => {
    setState((prev) => !prev);
  };

  return (
    <div className="card">
      {state ? (
        <CardState1 handleState={handleState} handleChange={handleChange} handleForm={handleForm} selected={selected} />
      ) : (
        <CardState2 value={selected} />
      )}
    </div>
  );
};

export default Card;
