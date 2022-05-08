import React from 'react';
import Button from './Button';
import Input from './Input';

const ratingData = [
  { id: 1, rating: 1 },
  { id: 2, rating: 2 },
  { id: 3, rating: 3 },
  { id: 4, rating: 4 },
  { id: 5, rating: 5 },
];

const Form = ({ handleChange, handleForm, selected }) => {
  return (
    <form className="card-form" onSubmit={handleForm}>
      <ul className="card-form-inputs">
        {ratingData.map((obj) => {
          return (
            <Input
              key={obj.id}
              id={obj.id}
              onChange={handleChange}
              value={obj.rating}
              handleChange={handleChange}
              selected={selected}
            />
          );
        })}
      </ul>
      <Button isDisabled={selected === null} />
    </form>
  );
};

export default Form;
