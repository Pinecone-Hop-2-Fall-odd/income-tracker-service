const { Router } = require("express");
const {createIncome, deleteTransaction ,getIncome, editTransaction } = require('../controllers/incomeController')

const transactionRoute = Router();

transactionRoute.get("/get-transaction", getIncome)
transactionRoute.post("/create-transaction", createIncome);
transactionRoute.delete("/delete-transaction/:transactionId", deleteTransaction)
transactionRoute.put('/edit-transaction/:id', editTransaction)

module.exports = transactionRoute;
    