import React, { useState, useEffect } from 'react';
import {
  BudgetInput,
  Form,
  ExpensesList,
  BudgetController
} from './components';

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [budgetexist, setBudgetExist] = useState(false);
  const [item, setItem] = useState({});
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (!Object.keys(item).length) return;

    const expenseArray = [...expenses, item];
    setExpenses(expenseArray);
  }, [item]);

  useEffect(() => {
    if (budget) setRemaining(budget);
  }, [budget]);

  return (
    <div className="App container">
      <header className="App-header">
        <h1>Weekly Budget</h1>
      </header>
      <div className="content main-content">
        {!budgetexist ? (
          <BudgetInput setBudget={setBudget} setBudgetExist={setBudgetExist} />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Form setItem={setItem} />
            </div>
            <div className="one-half column">
              <ExpensesList expenses={expenses} />
              <BudgetController budget={budget} remaining={remaining} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
