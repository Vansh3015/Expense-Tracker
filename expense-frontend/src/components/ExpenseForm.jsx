import React, { useEffect, useState } from "react";
import API from "../services/api";

function ExpenseForm({ selectedExpense, setSelectedExpense, refreshData }) {

    const [expense, setExpense] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
        description: ""
    });

    useEffect(() => {
        if (selectedExpense) {
            setExpense(selectedExpense);
        }
    }, [selectedExpense]);

    const handleChange = (e) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        });
    };

    const clearForm = () => {
        setExpense({
            title: "",
            amount: "",
            category: "",
            date: "",
            description: ""
        });
        setSelectedExpense(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (selectedExpense) {
                await API.put("/" + selectedExpense.id, expense);
                alert("Expense Updated Successfully");
            } else {
                await API.post("", expense);
                alert("Expense Added Successfully");
            }

            clearForm();
            refreshData();

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="card p-4 shadow mb-4">

            <h2 className="text-center mb-4">
                {selectedExpense ? "Update Expense" : "Add Expense"}
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        className="form-control"
                        name="title"
                        value={expense.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="row">

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            name="amount"
                            value={expense.amount}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Category</label>
                        <input
                            className="form-control"
                            name="category"
                            value={expense.category}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>

                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={expense.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        rows="3"
                        className="form-control"
                        name="description"
                        value={expense.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="d-flex justify-content-center gap-3">

                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        {selectedExpense ? "Update Expense" : "Add Expense"}
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={clearForm}
                    >
                        Clear
                    </button>

                </div>

            </form>

        </div>

    );

}

export default ExpenseForm;