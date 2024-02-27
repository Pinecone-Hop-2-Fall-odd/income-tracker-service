const UserModel = require ("../models/user-model.js");
const bcrypt = require ("bcrypt");


const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password || "", 10);
    const data = {password: hashedPassword, ...req.body}
    const result = await UserModel.create(data);

    res.json({ data: result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  const result = await UserModel.find();

  res.status(200).json({ user: result });
};


const login = async (req, res) => {
  const body = req.body;

  if (body.email === undefined) {
    res.status(403).json({ massage: "Email required" });
    return;
  }
  if (body.password === undefined) {
    res.status(403).json({ massage: "Password required" });
    return;
  }
  const oneUser = await UserModel.findOne({ email: body.email });
  if (!oneUser) {
    res.status(405).json({ massage: "User not found" });
  } else {
    if (bcrypt.compare(body.password)) {
      res.status(200).json({ user: oneUser });
      return;
    } else {
      res.status(405).json({ massage: "Password not match" });
      return;
    }
  }
};
module.exports = {getUser, createUser, login};

// export const login = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await UserModel.findOne({ email: username });

//     if (bcrypt.compare(user.password, password)) {
//       res.status(200).json({ uid: user._id });
//     } else {
//       res.status(401).json({ message: "failed" });
//     }
//   } catch (err) {
//     res.status(401).json({ message: "failed" });
//   }
// };
