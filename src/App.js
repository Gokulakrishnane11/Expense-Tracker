import React,{useState,useEffect} from'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
import Theme from './components/Theme';
function App() {

 
  return (
    <GlobalProvider> 
      <Theme/>
      <Header/>
      <div className='container'>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/> 
      </div>

    </GlobalProvider>
  );
}

export default App;
