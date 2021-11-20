import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"

function ExpenseList(props) {
	return (
		<div className="expenses">
			{ props.expenses.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						date={expense.date}
						title={expense.title}
						amount={expense.amount}/>
				);
			}) }
		</div>
	);
}

export default ExpenseList;
