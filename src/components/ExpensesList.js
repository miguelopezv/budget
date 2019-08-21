import React from 'react';
import Expense from './Expense';

const ExpensesList = ({ expenses }) => (
  <div className="expenses-list">
    <h2>Expenses</h2>
    {expenses.map(expense => (
      <Expense key={expense.id} expense={expense} />
    ))}
  </div>
);

export default ExpensesList;
