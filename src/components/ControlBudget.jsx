import { useState, useEffect } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlBudget = ({
  budget,
  setBudget,
  expenses,
  setExpenses,
  setIsValidBudget,
}) => {
  const formatMoney = (quantity) => {
    return quantity.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const handleResetApp = () => {
    const result = confirm(
      'Are you sure you want to reset the app?, all your expenses will be deleted'
    );
    if (result) {
      setExpenses([]);
      setBudget(0);
      setIsValidBudget(false);
    }
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
      setChartPercentage(((spent / budget) * 100).toFixed(1));
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
            pathColor:
              chartPercentage > 100
                ? '#ff7878'
                : `rgba(104, 75, 219, ${chartPercentage / 100})`,
            trailColor: '#f7f7f7',
            textColor: chartPercentage > 100 ? '#ff7878' : '#aa96fa',
          })}
        />
      </div>

      <div className="budget-amount">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          Budget: <span>{formatMoney(budget)}</span>
        </p>
        <p>
          Expenses: <span>{formatMoney(spentAmount)}</span>
        </p>
        <p className={`${availableAmount < 0 ? 'negative' : ''}`}>
          Available: <span>{formatMoney(availableAmount)}</span>
        </p>
      </div>
    </section>
  );
};
