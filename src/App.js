import React from 'react';
import { BudgetInput } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weekly Budget</h1>
      </header>
      <div className="content main-content">
        <BudgetInput />
      </div>
    </div>
  );
}

export default App;
