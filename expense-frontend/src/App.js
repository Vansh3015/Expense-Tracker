import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

import API from "./services/api";


function App() {

  const [selectedExpense, setSelectedExpense] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  const [expenses, setExpenses] = useState([]);


  const refreshData = () => {
    setRefresh(prev => !prev);
  };


  useEffect(() => {
    loadExpenses();
  }, [refresh]);


  const loadExpenses = async () => {
    try {
      const response = await API.get("");
      setExpenses(response.data);
    }
    catch(error){
      console.log(error);
    }
  };


  return (
    <>

      <Navbar />

      <Container maxWidth="lg">

        <Dashboard expenses={expenses}/>


        <ExpenseForm
          selectedExpense={selectedExpense}
          setSelectedExpense={setSelectedExpense}
          refreshData={refreshData}
        />


        <ExpenseList
          search={search}
          setSearch={setSearch}
          refresh={refresh}
          refreshData={refreshData}
          setSelectedExpense={setSelectedExpense}
        />


      </Container>

    </>
  );
}


export default App;