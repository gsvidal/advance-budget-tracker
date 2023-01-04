import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import './App.css';
import NewExpenseIcon from './assets/icons/new_expense_icon.svg';
import { NewExpenseModal } from './components/NewExpenseModal';
import { ExpensesList } from './components/ExpensesList';

function App() {
  const [budget, setBudget] = useState(localStorage.getItem('budget') ?? 0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimate, setIsModalAnimate] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState({});

  // let expensesInitial = JSON.parse(localStorage.getItem('expenses'));
  // if (!expensesInitial) {
  //   expensesInitial = [];
  // }

  console.log(localStorage.getItem('expenses'));
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses')
      ? JSON.parse(localStorage.getItem('expenses'))
      : []
  );

  const handleNewExpense = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalAnimate(true);
    }, 500);
  };

  useEffect(() => {
    console.log(budget);
    localStorage.setItem('budget', budget);
  }, [budget]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;
    if (budgetLS > 0) {
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
