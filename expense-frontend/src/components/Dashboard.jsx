import React from "react";


function Dashboard({expenses}) {


  const totalExpense = expenses.reduce(
    (sum, expense)=> sum + expense.amount,
    0
  );


  const categories = [
    ...new Set(expenses.map(expense=>expense.category))
  ];


  return (

    <div className="container mt-4">


      <h2 className="text-center mb-4 fw-bold text-primary">
        📊 Expense Summary
      </h2>


      <div className="row">


        <div className="col-md-4 mb-3">

          <div className="card shadow text-center p-3">

            <h5>💰 Total Spending</h5>

            <h3>
              ₹{totalExpense}
            </h3>

          </div>

        </div>



        <div className="col-md-4 mb-3">

          <div className="card shadow text-center p-3">

            <h5>📋 Transactions</h5>

            <h3>
              {expenses.length}
            </h3>

          </div>

        </div>



        <div className="col-md-4 mb-3">

          <div className="card shadow text-center p-3">

            <h5>🏷️ Categories</h5>

            <h3>
              {categories.length}
            </h3>

          </div>

        </div>


      </div>


    </div>

  );

}


export default Dashboard;