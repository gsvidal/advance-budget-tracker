import { useState } from 'react';
import { Header } from './components/Header';
import './App.css';
import NewExpenseIcon from './assets/icons/new_expense_icon.svg';
import { Modal } from './components/Modal';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewExpense = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className="new-expense">
          <img
            src={NewExpenseIcon}
            alt="New Expense Icon"
            onClick={handleNewExpense}
          />
        </div>
      )}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;
