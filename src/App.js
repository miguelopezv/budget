import React, { useState } from 'react';
import { BudgetInput } from './components';

function App() {
  const [budget, setBudget] = useState(0);
  const [budgetexist, setBudgetExist] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weekly Budget</h1>
      </header>
      <div className="content main-content">
        {!budgetexist ? (
          <BudgetInput setBudget={setBudget} setBudgetExist={setBudgetExist} />
        ) : (
          <div className="row">
            <div className="one-half column">
              <p>Form</p>
            </div>
            <div className="one-half column">
              <p>List</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
