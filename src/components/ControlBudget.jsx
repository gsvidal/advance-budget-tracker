import { useState, useEffect } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlBudget = ({ budget, expenses }) => {
  const formatMoney = (quantity) => {
    return quantity.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const [spentAmount, setSpentAmount] = useState(0);
  const [availableAmount, setAvailableAmount] = useState(0);
  const [chartPercentage, setChartPercentage] = useState(0);

  useEffect(() => {
    const spent = expenses.reduce((acum, current) => acum + current.amount, 0);
    setSpentAmount(spent);

    const available = budget - spent;
    setAvailableAmount(available);

    setTimeout(() => {
      setChartPercentage((spent / budget) * 100);
    }, 750);
  }, [expenses]);

  return (
    <section className="container-budget container shadow two-columns">
      <div>
        <CircularProgressbar
          text={`${chartPercentage}% Spent`}
          value={chartPercentage}
          styles={buildStyles({
            pathTransitionDuration: 1,
            pathColor: `rgba(104, 75, 219, ${chartPercentage / 100})`,
            trailColor: '#f7f7f7',
            textColor: '#aa96fa',
          })}
        />
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
