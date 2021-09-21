import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'

export const ExpenseItem = ({expense}) => {
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{expense.charge}</span>
                <span className="amount">${expense.amount}</span>
            </div>
            <button className="edit-btn" aria-label="edit button">
                <MdEdit />
            </button>
            <button className="clear-btn" aria-label="clear button">
                <MdDelete />
            </button>
        </li>
    )
}
