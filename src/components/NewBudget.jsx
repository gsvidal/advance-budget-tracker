export const NewBudget = () => {
  return (
    <div className="container-budget container shadow">
      <form action="" className="form">
        <div className="field">
          <label htmlFor="">Define Budget</label>
          <input
            type="text"
            placeholder="Add your budget"
            className="new-budget-input"
          />
        </div>
        <input type="submit" value="Done" />
      </form>
    </div>
  );
};
