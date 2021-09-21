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

console.log(initialExpenses);

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return <>
    <Alert />
    <h1>budget calculator</h1>
    <main className="App"> 
      <ExpenseForm />
      <ExpenseList expenses={expenses}/>
    </main>
    <h1>
      Total spending: <span className="total">
        $ {expenses.reduce((acc, curr) => {
          return (acc += curr.amount)
        }, 0)}
      </span>
    </h1>
  </>

}

export default App;
