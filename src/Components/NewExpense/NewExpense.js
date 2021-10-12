import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing,SetEditing]=useState(false);

    const saveExpenseDataHandler= (enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        //console.log(expenseData);

        props.OnAddExpense(expenseData);
    }

    const startEditingHandler = () =>{

        SetEditing(true);
    }

    const stopEditingHandler = ()=>{
        SetEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
            { isEditing && <ExpenseForm OnSaveExpenseData={saveExpenseDataHandler} OnCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;