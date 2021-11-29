import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css"
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList({ expenses, selectedYear, setYear }) {
	const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear() === parseInt(selectedYear));
	return (
		<Card className="expenses">
			<ExpensesFilter onFilterSelect={setYear} selectedYear={selectedYear} />
			{
				filteredExpenses.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							date={expense.date}
							title={expense.title}
							amount={expense.amount}/>
					);
				})
			}
		</Card>
	);
}

export default ExpenseList;
