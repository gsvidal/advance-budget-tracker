import { useState } from 'react';
import { Header } from './components/Header';
import './App.css';
import NewExpenseIcon from './assets/icons/new_expense_icon.svg';
import { NewExpenseModal } from './components/NewExpenseModal';
import { ExpensesList } from './components/ExpensesList';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimate, setIsModalAnimate] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalAnimate(true);
    }, 500);
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
        <>
          <main>
            <ExpensesList expenses={expenses} />
          </main>
          <section className="new-expense">
            <img
              src={NewExpenseIcon}
              alt="New Expense Icon"
              onClick={handleNewExpense}
            />
          </section>
        </>
      )}
      {isModalOpen && (
        <NewExpenseModal
          setIsModalOpen={setIsModalOpen}
          isModalAnimate={isModalAnimate}
          setIsModalAnimate={setIsModalAnimate}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      )}
    </div>
  );
}

export default App;
