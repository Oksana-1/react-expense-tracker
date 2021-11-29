import React, { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const addExpense = (newExpense) => {
  console.log("addExpense");
  console.log(newExpense);
}
function App() {
  const [selectedYear, setSelectedYear] = useState('2019');
  const setYear = (event) => {
    setSelectedYear(event.target.value);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpense}/>
      <p style={{color: "white", textAlign: "center"}}>Selected year: {selectedYear}</p>
      <ExpenseList expenses={expenses} selectedYear={selectedYear} setYear={setYear}/>
    </div>
  );
}

export default App;
