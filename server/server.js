import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRoutes from './routes/usersRoutes.js';  // Import the usersRoutes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Ensure MONGO_URI is defined
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.error("MONGO_URI is not defined in .env file");
    process.exit(1);
}
console.log("Loaded MONGO_URI:", MONGO_URI);

// Connect to MongoDB
mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.error("MongoDB connection error:", err));

// Set the port
const PORT = process.env.PORT || 5001;

// Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Use usersRoutes for user-related API endpoints
app.use("/api/users", usersRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/student", studnetRoutes);
// app.use("/api/teacher", teacherRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
