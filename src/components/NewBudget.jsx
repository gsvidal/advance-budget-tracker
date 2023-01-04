import { useState } from 'react';
import { Message } from './Message';

export const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState('');

  const setInputValue = (event) => {
    setBudget(Number(event.target.value));
  };

  const handleBudget = (event) => {
    event.preventDefault();
    if (budget <= 0) {
      setMessage('invalid budget input');
      return;
    }
    setMessage('');
    setIsValidBudget(true);
  };

  return (
    <div className="container-budget container shadow">
      <form action="" className="form">
        <div className="field">
          <label htmlFor="budget-input">Define Budget</label>
          <input
            type="number"
            placeholder="Add your budget"
            className="new-budget-input"
            onChange={setInputValue}
            value={budget}
          />
        </div>
        <input type="submit" value="Done" onClick={handleBudget} />
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};
