import { NewBudget } from './NewBudget';

export const Header = ({ budget, setBudget }) => {
  return (
    <header>
      <h1>Budget Tracker 2.0</h1>
      <NewBudget budget={budget} setBudget={setBudget} />
    </header>
  );
};
