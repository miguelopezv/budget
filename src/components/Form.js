import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ setItem }) => {
  const initialExpense = {
    id: shortid.generate(),
    label: '',
    quantity: ''
  };

  const [expense, setExpense] = useState(initialExpense);
  const [error, setError] = useState(false);

  const handleChange = e => {
    setExpense({
      ...expense,
      [e.target.name]:
        e.target.name === 'quantity' ? parseInt(e.target.value) : e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!expense.label || !expense.quantity) {
      setError(true);
      return;
    }

    setItem(expense);
    setError(false);
    setExpense(initialExpense);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add expenses here</h2>

      {error ? <Error message="Invalid form" /> : null}

      <div className="field">
        <label htmlFor="">Expense:</label>
        <input
          type="text"
          className="u-full-width"
          name="label"
          placeholder="e.g: lunch"
          value={expense.label}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="">Expense Quantity:</label>
        <input
          type="number"
          name="quantity"
          className="u-full-width"
          placeholder="e.g: 300"
          value={expense.quantity}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add"
      />
    </form>
  );
};

export default Form;
