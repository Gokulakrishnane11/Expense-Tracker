import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transactions from './Transactions';
const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    // console.log(context)
    // const transactions= context.transactions
  return (
    <>
      <h3>History</h3>
      <ul  className='list'>
        {/* map through transactions array and render each transaction */}
        {transactions.map(transaction =>(
            // pass transaction object as props to Transactions component
            <Transactions 
            transaction={transaction}
            key={transaction.id}
            />
        ))}
        
        
      </ul>
    </>
  )
}

export default TransactionList