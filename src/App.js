import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Milk", amount: 1, date: new Date(2022, 2, 28) },
    { title: "Bread", amount: 0.5, date: new Date(2022, 7, 6) },
    { title: "Chicken", amount: 5, date: new Date(2022, 6, 7) },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
