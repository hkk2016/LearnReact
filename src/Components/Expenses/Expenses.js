import './Expenses.css';
import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [yearSelected,SetFilterValue]=useState('2020');

    const OnFilterHandler = (filterSelected) =>
    {
        //console.log(filterSelected);
        SetFilterValue(filterSelected);
        console.log(yearSelected);
    }
    return (
        <div>           
            <Card className="expenses">
                <ExpensesFilter selected={yearSelected} OnFilter={OnFilterHandler} />
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem>
            </Card>
        </div>
    )
}

export default Expenses;