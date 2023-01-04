import closeButton from '../assets/icons/close_icon.svg';
import { useState, useEffect } from 'react';
import { Message } from './Message';

const generateId = () => {
  const randomString = Math.random().toString(36).substring(2);
  const dateString = Date.now().toString(36);
  return randomString + dateString;
};

const formatCreationDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  const formatDate = new Date(date).toLocaleDateString('es-ES', options);
  return formatDate;
};

export const NewExpenseModal = ({
  setIsModalOpen,
  isModalAnimate,
  setIsModalAnimate,
  expenses,
  setExpenses,
  expenseToEdit,
  setExpenseToEdit,
}) => {
  const [expense, setExpense] = useState({
    id: '',
    name: '',
    amount: '',
    category: '',
    date: '',
  });

  const [message, setMessage] = useState({
    error: '',
    success: '',
  });

  useEffect(() => {
    //Modal Form show us expense selected with edit swipe
    if (Object.keys(expenseToEdit).length > 0) {
      setExpense({
        name: expenseToEdit.name,
        amount: expenseToEdit.amount,
        category: expenseToEdit.category,
        id: expenseToEdit.id,
        date: expenseToEdit.date,
      });
    }
  }, [expenseToEdit]);

  const hideModal = (time) => {
    setIsModalAnimate(false);

    setTimeout(() => {
      setIsModalOpen(false);
      setExpenseToEdit({});
    }, time);
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
      setMessage({ ...message, error: 'all fields have to be filled' });
      return;
    }
    if (amount === 0) {
      setMessage({ ...message, error: 'Amount cannot be zero' });
      return;
    }

    //When expense is validated:
    if (expense.id) {
      // Update/Edit expense
      const expensesUpdated = expenses.map((expenseState) =>
        expenseState.id === expense.id ? expense : expenseState
      );
      setExpenses(expensesUpdated);
      setMessage({ success: 'expense updated!', error: '' });
    } else {
      // New Expense
      //Create an id for the expense before adding it to list
      expense['id'] = generateId();
      expense['date'] = formatCreationDate(Date.now());
      //Save valid expense in expenses list
      setExpenses([...expenses, expense]);
      //Clean error messages and send a successfull one
      setMessage({ success: 'expense added!', error: '' });
    }
    hideModal(800);
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img
          src={closeButton}
          alt="Close Modal"
          onClick={() => hideModal(300)}
        />
      </div>

      <form
        action=""
        className={`form ${isModalAnimate ? 'animate' : 'close'}`}
        onSubmit={handleSubmit}
      >
        <legend>{`${
          expenseToEdit.name ? 'Edit Expense' : 'New Expense'
        }`}</legend>

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

        <input
          type="submit"
          value={`${expenseToEdit.name ? 'Save Changes' : 'Add Expense'}`}
        />
        {message.error && <Message type="error">{message.error}</Message>}
        {message.success && <Message type="success">{message.success}</Message>}
      </form>
    </div>
  );
};
