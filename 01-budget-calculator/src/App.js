import React from 'react';
import './App.css';
import { ExpenseForm } from './components/ExpenseForm';
import { Alert } from './components/Alert';
import { ExpenseList } from './components/ExpenseList';


function App() {
  return <>
    <Alert />
    <ExpenseList />
    <ExpenseForm />
  </>

}

export default App;
