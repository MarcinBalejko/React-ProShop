import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// ^^^ creating a method that can be accessed with an instantiated user

userSchema.pre("save", async function (next) {
  // ^^^ ONLY want to run this when PASSWORD changes
  if (!this.isModified("password")) {
    next();
  }
  // ^^^checking whether password field is modified
  // if it hasn't been modified then we just run next() and move on
  // it will automatically run 'pre' 'save' (when 'create' user)
  // so we don't have to bring it into user controller

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
