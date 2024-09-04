import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
});

const user = mongoose.model("User", userSchema);

export default user;
