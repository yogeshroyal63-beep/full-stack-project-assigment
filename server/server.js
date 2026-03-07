const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200
  })
);

// Test API route
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running!" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});