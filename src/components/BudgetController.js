import React, { Fragment } from 'react';

const BudgetController = ({ budget, remaining }) => (
  <Fragment>
    <div className="alert alert-primary">Budget: $ {budget}</div>
    <div className="">Remaining: $ {remaining}</div>
  </Fragment>
);

export default BudgetController;
