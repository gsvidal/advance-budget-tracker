import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import GroceriesIcon from '../assets/icons/groceries_icon.svg';
import HealthIcon from '../assets/icons/health_icon.svg';
import HomeIcon from '../assets/icons/home_icon.svg';
import LeisureIcon from '../assets/icons/leisure_icon.svg';
import SavingsIcon from '../assets/icons/savings_icon.svg';
import SubscriptionsIcon from '../assets/icons/subscriptions_icon.svg';

const iconsDictionary = {
  savings: SavingsIcon,
  groceries: GroceriesIcon,
  home: HomeIcon,
  leisure: LeisureIcon,
  health: HealthIcon,
  subscriptions: SubscriptionsIcon,
};

export const Expense = ({ expense, setExpenseToEdit }) => {
  const { id, name, amount, category, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpenseToEdit(expense)}>Edit</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('Deleting...')}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <article className="expense shadow">
          <img
            src={iconsDictionary[category]}
            alt={`${iconsDictionary[category]} category`}
          />
          <div className="expense-description">
            <p className="expense-category">{category}</p>
            <p className="expense-name">{name}</p>
            <p className="expense-date">
              Added at: <span>{date}</span>
            </p>
          </div>
          <p className="expense-amount">${amount}</p>
        </article>
      </SwipeableListItem>
    </SwipeableList>
  );
};
