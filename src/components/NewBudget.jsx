export const NewBudget = ({ budget, setBudget }) => {
  const setInputValue = (event) => {
    setBudget(event.target.value);
  };

  return (
    <div className="container-budget container shadow">
      <form action="" className="form">
        <div className="field">
          <label htmlFor="">Define Budget</label>
          <input
            type="text"
            placeholder="Add your budget"
            className="new-budget-input"
            value={budget}
            onChange={setInputValue}
          />
        </div>
        <input type="submit" value="Done" />
      </form>
    </div>
  );
};
