import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

  const {addTransaction} = useContext(GlobalContext)

    const [text, settext] = useState('')
    const [amount, setAmount]= useState(0)


  const onSubmit = e=>{
    e.preventDefault();

    const transaction = {
      id: Math.floor(Math.random()*100),
      text: text,
      amount: +amount
    }

    // console.log('Transaction Submitted: ', transaction)
    addTransaction(transaction)
  }
  return (
    <>

     <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>

        <div className ="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." 
          value={text}
          onChange={(e)=>{
            settext(e.target.value)
          }}/>
        </div>


        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." 
          
          value={amount}

          onChange={(e)=>{
            setAmount(e.target.value)
          }}
          
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction