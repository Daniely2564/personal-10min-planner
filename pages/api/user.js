// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../server/middleware/mongodb";
import { signInSchema } from "../../server/validation/userValidation";
import User from "../../server/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const handler = (req, res) => {
  switch (req.method) {
    case "POST":
      return handleUserPost(req, res);
  }
};

const handleUserPost = async (req, res) => {
  const parsedBody = JSON.parse(req.body);
  const { firstName, lastName, email, password, confirmPassword } = parsedBody;
  const result = signInSchema.validate(parsedBody);
  if (result.error) {
    return res.status(422).json({ message: result.error.details[0].message });
  }
  const hashSalt = 10;
  const hashedPassword = await bcrypt.hash(password, hashSalt);
  const user = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  jwt.sign();
  res.json({ message: "hello" });
};

export default connectDB(handler);
