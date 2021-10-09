import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler= (enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        //console.log(expenseData);

        props.OnAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm OnSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;