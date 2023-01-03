import { useState, useEffect } from 'react';

export const ControlBudget = ({ budget, expenses }) => {
  const formatMoney = (quantity) => {
    return quantity.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const [spentAmount, setSpentAmount] = useState(0);
  const [availableAmount, setAvailableAmount] = useState(0);

  useEffect(() => {
    const spent = expenses.reduce((acum, current) => acum + current.amount, 0);
    setSpentAmount(spent);

    const available = budget - spent;
    setAvailableAmount(available);
  }, [expenses]);

  return (
    <section className="container-budget container shadow two-columns">
      <div>
        <p>Chart here</p>
      </div>

      <div className="budget-amount">
        <p>
          Budget: <span>{formatMoney(budget)}</span>
        </p>
        <p>
          Expenses: <span>{formatMoney(spentAmount)}</span>
        </p>
        <p>
          Available: <span>{formatMoney(availableAmount)}</span>
        </p>
      </div>
    </section>
  );
};
