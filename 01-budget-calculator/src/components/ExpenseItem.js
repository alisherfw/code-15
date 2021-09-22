import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'

export const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
    const {id, charge, amount} = expense;
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{expense.charge}</span>
                <span className="amount">${expense.amount}</span>
            </div>
            <button className="edit-btn" aria-label="edit button" onClick={() => handleEdit(id)}>
                <MdEdit />
            </button>
            <button className="clear-btn" aria-label="delete button" onClick={() => handleDelete(id)}>
                <MdDelete />
            </button>
        </li>
    )
}
