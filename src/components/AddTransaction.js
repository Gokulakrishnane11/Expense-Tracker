import React,{useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'


const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount, setAmount] = useState(0);
    // get addTransaction method from global context
    const {addTransaction} = useContext(GlobalContext);

    // onSubmit function for add transaction
    const onSubmit = (e) => {
        e.preventDefault();
        // check if text is whitespace
        if(!text.trim()) return
        // create new transaction object
        const newTransaction = {
            id: new Date().getTime(),
            text,
            amount:+amount
        }
        // add transaction to the transactions state
        addTransaction(newTransaction);
        // clear form fields
        setText('');
        setAmount(0);
    }

    
  return (
    <>
        <h3>Add New Transaction</h3>
        <form id='form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text...' required/>
            </div>
            <div className='form-control'>
                <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount...' required/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction