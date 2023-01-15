import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";



function AccountContainer() {

  const [transactions, setTransactions] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then((res)=> res.json())
    .then((data)=> setTransactions(data))
  }, [])

  console.log(transactions)

  function addTransaction(newTransaction){
    const updatedTransaction = [...transactions, newTransaction]
    setTransactions(updatedTransaction)
  }

  return (
    <div>
      <Search search = {search} setSearch = {setSearch}/>
      <AddTransactionForm addTransaction = {addTransaction}/>
      <TransactionsList transactions = {transactions} search ={search} />
    </div>
  );
}

export default AccountContainer;