const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware

app.use(express.json());
app.use(cors({
    origin: "https://u2-dev-e28v.vercel.app"}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Define Schema
const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const FormData = mongoose.model("FormData", FormDataSchema);

// API to Handle Form Submission
app.post("/", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        const newEntry = new FormData({ name, email, message });
        await newEntry.save();
        res.json({ success: true, message: "Form submitted and saved!" });
    } catch (err) {
        res.status(500).json({ error: "Database error" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
