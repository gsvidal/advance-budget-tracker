export const Filter = ({ filterCategory, setFilterCategory }) => {
  const handleExpensesFilter = (event) => {
    setFilterCategory(event.target.value);
  };

  return (
    <div className="filter shadow container">
      <form action="">
        <div className="field">
          <label htmlFor="filter-input">Filter by category</label>
          <select
            name="filter-input"
            id="filter-input"
            onChange={handleExpensesFilter}
            value={filterCategory}
          >
            <option value="">--Select--</option>
            <option value="savings">Savings</option>
            <option value="groceries">Groceries</option>
            <option value="home">Home</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  );
};
