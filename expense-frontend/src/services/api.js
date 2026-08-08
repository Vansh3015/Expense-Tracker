import axios from "axios";

const API = axios.create({
    baseURL: "https://expense-tracker-581q.onrender.com/api/expenses"
});

export default API;
