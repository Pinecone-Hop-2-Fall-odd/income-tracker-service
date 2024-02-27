const { UserModel } = require ("../models/user-model.js");
const bcrypt = ("bcrypt");

export const login = async (req, res) => {
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