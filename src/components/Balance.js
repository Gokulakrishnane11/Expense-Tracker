import React from 'react'
import { GlobalContext } from '../Context/GlobalState'
import {useContext} from 'react'


const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    // update the amount calculation for each transaction
    const amount = transactions.map(transaction => transaction.amount);
    const totalAmount = amount.reduce((acc, item)=>(acc+=item),0).toFixed(2);


  return (
    <>
        <h4>Your Balance :</h4>
        <h1 id='balance'>₹ {totalAmount}</h1>
    </>
  )
}

export default Balance