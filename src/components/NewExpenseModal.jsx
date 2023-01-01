import closeButton from '../assets/icons/close_icon.svg';
import { useState } from 'react';
import { Message } from './Message';

const generateId = () => {
  let randomString = Math.random().toString(36);
  randomString = randomString.slice(2, randomString.length);
  const dateString = Date.now().toString(36);
  return randomString + dateString;
};

export const NewExpenseModal = ({
  setIsModalOpen,
  isModalAnimate,
  setIsModalAnimate,
  expenses,
  setExpenses,
}) => {
  const [expense, setExpense] = useState({
    name: '',
    amount: '',
    category: '',
  });

  const [message, setMessage] = useState('');

  const hideModal = () => {
    setIsModalAnimate(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setExpense({
      ...expense,
      [event.target.name]:
        event.target.name === 'amount'
          ? Number(event.target.value)
          : event.target.value,
    });
  };

  const { name, amount, category } = expense;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    if (
      name.trim() === '' ||
      (typeof amount === 'string' && amount.trim() === '') ||
      category.trim() === ''
    ) {
      setMessage('all fields have to be filled');
      return;
    }
    if (amount === 0) {
      setMessage('Amount cannot be zero');
      return;
    }

    //When expense is validated:
    setMessage('');
    //Create an id for the expense before adding it to list
    expense['id'] = generateId();
    //Save valid expense in expenses list
    setExpenses([...expenses, expense]);
    //Clean form
    setExpense({
      name: '',
      amount: '',
      category: '',
    });
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={closeButton} alt="Close Modal" onClick={hideModal} />
      </div>

      <form
        action=""
        className={`form ${isModalAnimate ? 'animate' : 'close'}`}
        onSubmit={handleSubmit}
      >
        <legend>New Expense</legend>

        <div className="field">
          <label htmlFor="expense-name">Expense Name</label>
          <input
            type="text"
            placeholder="Add an Expense name"
            id="expense-name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="expense-amount">Expense Amount</label>
          <input
            type="number"
            placeholder="Add an Expense amount: e.g. 400"
            id="expense-amount"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="expense-category">Expense Category</label>
          <select
            id="expense-category"
            name="category"
            value={category}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
            <option value="savings">Savings</option>
            <option value="groceries">Groceries</option>
            <option value="home">Home</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>

        <input type="submit" value="Add expense" />
      </form>
      {message && <Message type="error">{message}</Message>}
    </div>
  );
};
