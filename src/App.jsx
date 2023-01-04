import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import './App.css';
import NewExpenseIcon from './assets/icons/new_expense_icon.svg';
import { NewExpenseModal } from './components/NewExpenseModal';
import { ExpensesList } from './components/ExpensesList';
import { Filter } from './components/Filter';

function App() {
  const [budget, setBudget] = useState(Number(localStorage.getItem('budget')));
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimate, setIsModalAnimate] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState({});
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses')
      ? JSON.parse(localStorage.getItem('expenses'))
      : []
  );
  const [filterCategory, setFilterCategory] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const handleNewExpense = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalAnimate(true);
    }, 500);
  };

  useEffect(() => {
    localStorage.setItem('budget', budget);
  }, [isValidBudget]);

  useEffect(() => {
    if (Number(localStorage.getItem('budget'))) {
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

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

  useEffect(() => {
    let filteredExpensesList;
    if (filterCategory) {
      filteredExpensesList = expenses.filter(
        (expense) => expense.category === filterCategory
      );
    } else {
      filteredExpensesList = expenses;
    }
    setFilteredExpenses(filteredExpensesList);
  }, [expenses, filterCategory]);

  return (
    <div className="App">
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <Filter
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
            />
            <ExpensesList
              expenses={filteredExpenses}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
              filterCategory={filterCategory}
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
