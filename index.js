const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter  = require("./routers/user-router.js");
const transactionRoute = require ("../income-tracker-service/routers/transaction-router.js")

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors());


app.use(userRouter);
app.use(transactionRoute)

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://Test1:test123@bibn.9nttjsn.mongodb.net/"
  );
  console.log("database connected");
};

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
