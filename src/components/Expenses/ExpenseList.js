import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css"
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList(props) {
	return (
		<Card className="expenses">
			<ExpensesFilter onFilterSelect={props.setYear} selectedYear={props.selectedYear} />
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
