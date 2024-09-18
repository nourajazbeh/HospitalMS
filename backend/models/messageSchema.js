// messageSchema.js
import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name Is Required!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name Is Required!"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Is Required!"],
  },
  message: {
    type: String,
    required: [true, "Message Is Required!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
