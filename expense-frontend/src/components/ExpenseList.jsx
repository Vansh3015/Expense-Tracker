import React, { useEffect, useMemo, useState } from "react";
import API from "../services/api";

function ExpenseList({
  setSelectedExpense,
  refresh,
  refreshData,
  search,
  setSearch,
}) {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses();
  }, [refresh]);

  const getExpenses = async () => {
    try {
      const response = await API.get("");
      setExpenses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExpense = async (id) => {
    if (!window.confirm("Delete this expense?")) return;

    try {
      await API.delete("/" + id);
      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredExpenses = useMemo(() => {
    if (!search) return expenses;

    return expenses.filter(
      (expense) =>
        expense.title.toLowerCase().includes(search.toLowerCase()) ||
        expense.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [expenses, search]);

  return (
    <div className="container mt-4">

      <div className="card shadow-sm mb-4">

        <div className="card-body d-flex justify-content-between align-items-center">

          <div>
            <h2 className="m-0 text-primary fw-bold">
              🧾 Expense List
            </h2>

            <span className="badge bg-primary mt-2">
              {filteredExpenses.length} Expenses
            </span>
          </div>

          <div className="search-box">


  <input

    type="text"

    className="form-control"

    placeholder="🔍 Search expenses..."

    value={search}

    onChange={(e)=>setSearch(e.target.value)}

  />


</div>

        </div>

      </div>


      {filteredExpenses.length === 0 ? (

        <div className="alert alert-info text-center">
          No Expenses Found
        </div>

      ) : (

        <div className="row">

          {filteredExpenses.map((expense) => (

            <div
              className="col-lg-6 col-md-6 col-12 mb-4"
              key={expense.id}
            >

              <div className="expense-card h-100">

                <h3 className="expense-title">
                  🧾 {expense.title}
                </h3>

                <hr />

                <p>
                  💵 <strong>Amount :</strong> ₹{expense.amount}
                </p>

                <p>
                  🏷️ <strong>Category :</strong> {expense.category}
                </p>

                <p>
                  📆 <strong>Date :</strong> {expense.date}
                </p>

                <p>
                  📝 <strong>Description :</strong>{" "}
                  {expense.description || "No Description"}
                </p>


                <div className="d-flex justify-content-end gap-2 mt-4">

                  <button
                    className="btn btn-warning"
                    onClick={() => setSelectedExpense(expense)}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteExpense(expense.id)}
                  >
                    🗑️ Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default ExpenseList;