import React from 'react';

const Expense = ({ expense }) => (
  <li className="expenses">
    <p>
      {expense.label}
      <span className="expense">$ {expense.quantity}</span>
    </p>
  </li>
);

export default Expense;
