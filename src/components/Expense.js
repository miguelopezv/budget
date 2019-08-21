import React from 'react';

const Expense = ({ expense }) => {
  // TODO: remove expense
  // const clickHandler = id => {};

  return (
    <li className="expenses">
      <p>
        {expense.label}
        <span className="expense">$ {expense.quantity}</span>
        {/* <button type="button" onClick={() => clickHandler(expense.id)}>
          Remove
        </button> */}
      </p>
    </li>
  );
};

export default Expense;
