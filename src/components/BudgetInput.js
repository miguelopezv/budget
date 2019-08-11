import React, { Fragment, useState } from 'react';

const BudgetInput = () => {
  const [budget, setBudget] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (budget <= 0 || !budget) {
      setError(true);
      return;
    }
  };

  return (
    <Fragment>
      <h2>Add your budget</h2>

      {error ? (
        <p className="alert alert-danger error">Budget is incorrect</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Add your budget"
          onChange={e => setBudget(parseInt(e.target.value))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set budget"
        />
      </form>
    </Fragment>
  );
};

export default BudgetInput;
