const { mongoose, Schema } = require("mongoose");

const transactionSchema = new Schema({
    userId: { type: String, required: true},
    category:{
        type: String,
        enum: ["food", "shopping", "bills", "clothing", "housing", "transportation", "vehicle", "entertainment", "communication", "investments",],
    },
    transactionTitle: String,
    amount: {type: Number, required: true},
    createAt:{ type: Date, default: Date.now()},
    note: String,
    transactionType:{
        type: String,
        enum:["income", "expense"]
    },
});
const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = transactionModel