
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  doctorDepartment: { type: String },
  // Weitere Felder hier...
});

const User = mongoose.model("User", userSchema);

export { User };
