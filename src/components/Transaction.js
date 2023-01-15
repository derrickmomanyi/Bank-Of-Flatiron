import React from "react";

function Transaction({transactions, search }) {                                  // // destructured props passed as arguments to Transaction component
  return (
    <>
    {transactions

      .filter((transaction) =>
        transaction.description.toLowerCase().includes(search.toLowerCase())                    //filter description details on the search bar
        )
           
      .map((transaction) =>                                                                     //display transactions data in a table
          <tr key= {transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        )}
    </>
  );
}

export default Transaction;
