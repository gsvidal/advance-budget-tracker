export const ControlBudget = ({ budget }) => {
  const formatMoney = (quantity) => {
    return quantity.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <p>Chart here</p>
      </div>

      <div className="budget-amount">
        <p>
          Presupuesto: <span>{formatMoney(budget)}</span>
        </p>
        <p>
          Available: <span>{formatMoney(0)}</span>
        </p>
        <p>
          Spent: <span>{formatMoney(0)}</span>
        </p>
      </div>
    </div>
  );
};
