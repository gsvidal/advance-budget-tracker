import { NewBudget } from './NewBudget';
import { ControlBudget } from './ControlBudget';

export const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1>Budget Tracker 2.0</h1>
      {isValidBudget ? (
        <ControlBudget budget={budget} />
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
