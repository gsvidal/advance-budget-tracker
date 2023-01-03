import { useState, useEffect } from 'react';
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
  //Analize reason to put expenseToEdit in App component
  const [expenseToEdit, setExpenseToEdit] = useState({});

  const handleNewExpense = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalAnimate(true);
    }, 500);
  };

  useEffect(() => {
    if (Object.keys(expenseToEdit).length > 0) {
      setIsModalOpen(true);

      setTimeout(() => {
        setIsModalAnimate(true);
      }, 500);
    }
  }, [expenseToEdit]);

  const deleteExpense = (id) => {
    const expensesUpdate = expenses.filter((expense) => expense.id !== id);
    setExpenses(expensesUpdate);
  };

  return (
    <div className="App">
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
            />
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
          expenseToEdit={expenseToEdit}
          setExpenseToEdit={setExpenseToEdit}
        />
      )}
    </div>
  );
}

export default App;
