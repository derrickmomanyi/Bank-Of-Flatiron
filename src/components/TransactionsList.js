import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions, search}) {                        // destructured props passed as arguments to TransactionList component
  
  return (

    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}

        <Transaction   search ={search}  transactions = {transactions}  />                       {/*passing arguments as props to Transaction Component */}
    
   
      </tbody>
    </table>
  );
}

export default TransactionsList;
