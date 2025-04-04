import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;

// Sync database and start server
sequelize.sync()
  .then(() => {
    console.log("Database connected and synced.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("Database connection error:", err));
