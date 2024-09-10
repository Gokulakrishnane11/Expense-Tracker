import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Transactions = ({transaction}) => {
  // Get delete function from GlobalContext
  const {deleteTransaction} = useContext(GlobalContext);

  // Check if transaction amount is negative, then make it red. Else, make it green.
  const sign = transaction.amount < 0 ? '-':'+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}{Math.abs (transaction.amount)} Rs</span><button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>X</button>
    </li> 
  )
}

export default Transactions