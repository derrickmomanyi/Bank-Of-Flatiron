# Bank of Flatiron

## Table of Contents
This README consists of the Project Requirements, Setup, Author, Licences and a few explanations

Welcome to the Bank of Flatiron, where you can trust us with all your financial
data!



## Project Requirements

For this project, I’ll be building out a React application that displays a
list of recent bank transactions, among other features.

As a user, I should be able to:

- See a table of the transactions.

- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **as well as post the new transaction to the backend
  API for persistence**.

- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.



## Setup

JSON server used to update the transactions;


Go to [http://localhost:8001/transactions](http://localhost:8001/transactions) 

## Explanation

The step by step thought process has been commented in the respective components

The Component Hierarchy is;

App
   ├──AccountContainer
      ├── AddTansactionForm
      └── Search
      └── TransactionList
          ├── Transactions


1. Displayed the data to the Transactions component by passing props through AccountContainer => TransactionList => Transaction
Mapped the data{key, date, category, description, amount} to the table using .map() method completing the first deliverable


2. Added functionality to the form, added onChange event to track {date, category, description, amount} values after each key stroke, added a post method to add our data to backend server completing the second deliverable

3. Added onChange event to track values after each keystroke for our search functionality on the Search component. Passed search state variables as props to the Transaction component through AccountContainer => TransactionList => Transaction, filtered the values from the category and description fields


## LINK
Here lies the link to the live site https://serene-bombolone-24729d.netlify.app/

## Author
Derrick Momanyi

Github: @derrickmomanyi

## License
Copyright © 2022 Derrick Momanyi This project is MORINGA SCHOOL licensed.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License


    





