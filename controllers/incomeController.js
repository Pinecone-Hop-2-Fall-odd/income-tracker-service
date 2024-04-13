const transactionModel = require('../models/transactionModel')

const getIncome = async(req, res) => {
    try{
        const response= await transactionModel.find({});
         res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createIncome = async (req, res) => {
    const data = req.body;
    try{
        const response = await transactionModel.create(data)
        res.status(200).send(response);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
       }
};
const deleteTransaction = async (req, res) => {
    const transactionId = req.params.transactionId
    try{
        const transaction = await transactionModel.findByIdAndDelete(transactionId)
        console.log(transaction)
        if(transaction) {
            res.status(200).send(transaction.id)
        }else{
            res.status(404).send('transaction not found')
        }
    } catch (error) {
        res.status(500).send("Internal error")
    }
}
const editTransaction = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        await transactionModel.findByIdAndUpdate(id, data, { new: true });
        res.status(200).send({ message: "Transaction updated successfully." });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports= { createIncome, getIncome, deleteTransaction, editTransaction};
