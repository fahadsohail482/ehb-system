import User from "../models/user";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6)
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");
    const user = new User(req.body);
    await user.save();
    console.log("USER CREATED", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log("CREATE USER FAILED", err);
    return res.status(400).send("Error. Try again.");
  }
};

export const login = async (req, res) => {
  console.log("body", req.body);
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).exec();
    console.log("USER EXIST", user);
    if (!user) res.status(400).send("User with email  not found");
    user.comparePassword(password, (err, match) => {
      console.log("compare password in login error", err);
      if (!match || err) return res.status(400).send("Wrong Password");
      //generate a token to send to client
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.send({
        token,
        user: {
          email: user.email,
          name: user.name,
          _id: user._id,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    });
  } catch (err) {
    console.log("LOGIN ERROR", err);
    res.status(400).send("Signin failed");
  }
};
