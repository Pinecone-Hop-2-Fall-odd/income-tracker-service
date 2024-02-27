const cors = require("cors");
const userRouter  = require("./routers/user-router.js");
const mongoose = require("mongoose");
const express = require("express")

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);

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
