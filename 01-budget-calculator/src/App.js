import React, { useState } from 'react';
import './App.css';
import { ExpenseForm } from './components/ExpenseForm';
import { Alert } from './components/Alert';
import { ExpenseList } from './components/ExpenseList';
import { uuid } from 'uuidv4';


const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem("expenses")) : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  
  const [charge, setCharge] = useState('');
  

  const [amount, setAmount] = useState('');

  const [alert, setAlert] = useState({show:false});

  const [edit, setEdit] = useState(false);
  
  const [id, setId] = useState(0);

  const handleCharge = e => {
    setCharge(e.target.value)
    // console.log(e.target.value)
  }
  const handleAmount = e => {
    setAmount(e.target.value)
    // console.log(e.target.value)
  }

  const handleAlert = ({type, text}) => {
    setAlert({show:true,type,text})
    setTimeout(() => {
      setAlert({show:false})
    }, 3000)
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(charge, amount)
    if(charge !== '' && amount > 0) {

      if(edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item; 
        })
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = {id:uuid(), charge, amount}
        setExpenses([...expenses, singleExpense]);
        handleAlert({type:'success', text:'item added'})
      }
      setCharge('');
      setAmount('');
    } else {
      // handle alert called
      handleAlert({type:'danger', text:'Charge should not be empty and Amount should be higher than 0'})
    }
  }

  const clearItems = () => {
    setExpenses([]);
    handleAlert({type: "danger", text: "All Items deleted"})
  };
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter(item => item.id !== id)
    setExpenses(tempExpenses)
    handleAlert({type: "danger", text: "Item deleted"})
  };
  const handleEdit = (id) => {
    let expense = expenses.find(item => item.id === id);
    let {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }

  return <>
    {alert.show && <Alert type={alert.type} text={alert.text} />}
    <h1>budget calculator</h1>
    <main className="App"> 
      <ExpenseForm 
        charge={charge}
        amount={amount}
        handleAmount={handleAmount}
        handleCharge={handleCharge}
        handleSubmit={handleSubmit}
        edit={edit}
      />
      <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit}
      clearItems={clearItems}/>
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
