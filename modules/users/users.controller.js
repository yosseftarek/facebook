import userModel from "../../db/models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { userName, email, password } = req.body;
  const userExist = await userModel.findOne({ where: { email } });
  if (userExist) {
    return res.json({ message: "user already exist" });
  } else {
    const hashed = bcrypt.hashSync(password, 8);
    const result = await userModel.create({
      userName,
      email,
      password: hashed,
    });
    return res.json({ message: "user added successfully", result });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ where: { email } });
  if (!user) {
    return res.json({ message: "user isn't found" });
  }
  const validPass = bcrypt.compareSync(password, user.password);
  if (!validPass) {
    return res.json({ message: "password isn't correct" });
  } else {
    const loginStatus = await user.update({ loginStatus: true });
    return res.json({ message: "user logged in successfully", user });
  }
};

export const logout = async (req, res) => {
  const { id } = req.query;
  const loginStatus = await userModel.update(
    { loginStatus: false },
    { where: { id } }
  );
  return res.json({ message: "user logged out successfully", loginStatus });
};
