import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredData) => {
    const newExpenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler}> </ExpenseForm>
    </div>
  );
};

export default NewExpense;
