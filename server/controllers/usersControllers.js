import User from "../models/userModel.js";

// Get all users
export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();

		res.json(users);
	} catch (error) {
		res.status(500).json({ message: "Error fetching users", error });
	}
};

// Create a new user
export const createUser = async (req, res) => {
	try {
		const newUser = new User(req.body);
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (error) {
		res.status(500).json({ message: "Error creating user", error });
	}
};

// Update a user by ID
export const updateUser = async (req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!updatedUser)
			return res.status(404).json({ message: "User not found" });
		res.json(updatedUser);
	} catch (error) {
		res.status(500).json({ message: "Error updating user", error });
	}
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.id);
		if (!deletedUser)
			return res.status(404).json({ message: "User not found" });
		res.json({ message: "User deleted" });
	} catch (error) {
		res.status(500).json({ message: "Error deleting user", error });
	}
};
