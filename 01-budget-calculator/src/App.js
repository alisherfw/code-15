import React, { useState } from 'react';
import './App.css';
import { ExpenseForm } from './components/ExpenseForm';
import { Alert } from './components/Alert';
import { ExpenseList } from './components/ExpenseList';
import { uuid } from 'uuidv4';

const initialExpenses = [
  {id:uuid(), charge:"rent", amount: 1500},
  {id:uuid(), charge:"car payment", amount: 500},
  {id:uuid(), charge:"credit card bill", amount: 1200}
];


function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState('');

  const [amount, setAmount] = useState('');

  const handleCharge = e => {
    setCharge(e.target.value)
    // console.log(e.target.value)
  }
  const handleAmount = e => {
    setAmount(e.target.value)
    // console.log(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    console.log(charge, amount)
    if(charge !== '' && amount > 0) {
      const singleExpense = {id:uuid(), charge, amount}
      setExpenses([...expenses, singleExpense]);
    } else {
      // handle alert called
    }
  }

  return <>
    <Alert />
    <h1>budget calculator</h1>
    <main className="App"> 
      <ExpenseForm 
        charge={charge}
        amount={amount}
        handleAmount={handleAmount}
        handleCharge={handleCharge}
        handleSubmit={handleSubmit}
      />
      <ExpenseList expenses={expenses}/>
    </main>
    <h1>
      Total spending: <span className="total">
        $ {expenses.reduce((acc, curr) => {
          return (acc += parseInt(curr.amount))
        }, 0)}
      </span>
    </h1>
  </>

}

export default App;
