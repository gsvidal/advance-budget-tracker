import { Expense } from './Expense';

export const ExpensesList = ({
  expenses,
  setExpenseToEdit,
  deleteExpense,
  filterCategory,
}) => {
  return (
    <section className="list-expenses container">
      <h2>
        {expenses.length
          ? 'Expenses:'
          : `There are not expenses ${
              filterCategory && 'in this category'
            } yet`}
      </h2>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          setExpenseToEdit={setExpenseToEdit}
          deleteExpense={deleteExpense}
        />
      ))}
    </section>
  );
};
