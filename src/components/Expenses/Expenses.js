import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const filteredYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onFilteredYear={filteredYearHandler}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
