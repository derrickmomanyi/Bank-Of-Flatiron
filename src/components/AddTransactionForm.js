import React, {useState} from "react";

function AddTransactionForm({ addTransaction }) {                       // destructured props passed as arguments to AddTransactionForm component
     
     const [date, setDate] = useState("")                                //use state hook to update the date, category, description and amount fields
     const [description, setDescription] = useState("")
     const [category, setCategory] = useState("")
     const [amount, setAmount] = useState("")

     function handleSubmit(e) {                                         // brings functionality to submit button, prevents default refreshing behavior, 
      e.preventDefault();
      const transactionObj = {
        date: date,
        description: description,
        category: category,
        amount: amount,
      };
  
      fetch("http://localhost:8001/transactions", {                              // post method to add transactions to our database
        
      method: "POST",
        
      headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(transactionObj),
      })
      
        .then((response) => response.json())
        .then((transaction) => addTransaction(transaction));
    }
    

  return (

    <div className="ui segment">                                                    
      <form className="ui form" onSubmit = {handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={date}                                             //targets date, description, category and amount values after each key stroke
          onChange = {(e) => setDate(e.target.value)}/>

          <input type="text" name="description" placeholder="Description" value={description}
          onChange = {(e) => setDescription(e.target.value)}/>

          <input type="text" name="category" placeholder="Category" value={category}
          onChange = {(e) => setCategory(e.target.value)}/>

          <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount}
          onChange = {(e) => setAmount(e.target.value)}/>

        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
