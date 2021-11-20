import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./ExpenseList.css"

function ExpenseList(props) {
	return (
		<Card className="expenses">
			{ props.expenses.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						date={expense.date}
						title={expense.title}
						amount={expense.amount}/>
				);
			}) }
		</Card>
	);
}

export default ExpenseList;
