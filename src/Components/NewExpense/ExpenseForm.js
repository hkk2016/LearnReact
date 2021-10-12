import React ,{ useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [titleEntered,setTitle]= useState('');
    const [amountEntered,setAmount]= useState('');
    const [dateEntered,setDate]= useState('');

    const titleChangeHandler = (event) => {

        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {

        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {

        setDate(event.target.value);
    }

    const submitHandler = (event) =>{

        event.preventDefault();
        const expenseData = {

            title: titleEntered,
            amount: +amountEntered,
            date : new Date(dateEntered)
        };

        
        props.OnSaveExpenseData(expenseData);

        console.log(expenseData);

        setTitle('');
        setAmount('');
        setDate('');

        props.OnCancel();
    }

    

    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={titleEntered} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" value={amountEntered} step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={dateEntered} max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit" >Add Expense</button>
                <button type="button" onClick={props.OnCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm;