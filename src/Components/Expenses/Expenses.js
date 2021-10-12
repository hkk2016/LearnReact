import './Expenses.css';
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart  from './ExpensesChart';

function Expenses(props) {

    const [yearSelected, SetFilterValue] = useState('2020');

    const OnFilterHandler = (filterSelected) => {
        //console.log(filterSelected);
        SetFilterValue(filterSelected);
        console.log(yearSelected);
    };

    const filteredArray = props.expenses.filter(expense => {

        return expense.date.getFullYear().toString() === yearSelected;
    });


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={yearSelected} OnFilter={OnFilterHandler} />
                <ExpensesChart expenses={filteredArray} />
                <ExpensesList items={filteredArray} />

            </Card>
        </div>
    )
}

export default Expenses;