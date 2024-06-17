const connectToMongo = require("./src/config/db");
const express = require("express");
const cors = require('cors');
require('dotenv').config(); // Load environment variables



const app = express();
const port = process.env.PORT || 5000; // Set a default port if not defined in .env

// Connect to MongoDB
connectToMongo();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
// Uncomment and set up the notes route if you have it


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
