import { NewBudget } from './NewBudget';
import { ControlBudget } from './ControlBudget';

export const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  expenses,
}) => {
  return (
    <header>
      <h1>Budget Planner</h1>
      {isValidBudget ? (
        <ControlBudget budget={budget} expenses={expenses} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};
