import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./configuration/dbConfig.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import createAdminAccount from "./scripts/admin.js";
import cors from "cors";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Allow only this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow credentials
  optionsSuccessStatus: 200,
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
// Create admin account if not exists
createAdminAccount();

// Routes
app.use("/user", authRoute);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server listening on port ${port}!`);
});
