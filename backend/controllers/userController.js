import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

//@desc Auth user & token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
});

export { authUser };
