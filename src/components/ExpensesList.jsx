import { Expense } from './Expense';

export const ExpensesList = ({ expenses }) => {
  return (
    <section className="list-expenses container">
      <h2>
        {expenses.length ? 'Expenses:' : 'There is not any expenses list yet'}
      </h2>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </section>
  );
};
