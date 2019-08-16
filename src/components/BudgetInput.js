import React, { Fragment, useState } from 'react';
import Error from './Error';

const BudgetInput = ({ setBudget, setBudgetExist }) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (quantity <= 0 || !quantity) {
      setError(true);
      return;
    }
    setError(false);
    setBudget(quantity);
    setBudgetExist(true);
  };

  return (
    <Fragment>
      <h2>Add your budget</h2>

      {error ? <Error message="Budget is incorrect" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Add your budget"
          onChange={e => setQuantity(parseInt(e.target.value))}
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
