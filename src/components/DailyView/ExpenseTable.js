import React from 'react'
import Expense from './Expense'

import '../../assets/css/table.css'

const ExpenseTable = (props) => {
    return (
        <table className="table table-striped table-bordered table-dark rwd-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Expense</th>
                    <th scope="col">Category</th>
                    <th scope="col">Comments</th>  
                    <th scope="col">Edit</th> 
                    <th scope="col">Delete</th>                
                </tr>
            </thead>
            <tbody>
                <Expense expenses={props.expenses} date={props.date} authUser={props.authUser} key={Math.random() * 100}/>
            </tbody>
        </table>
    )
}

export default ExpenseTable;