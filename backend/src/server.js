import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./configuration/dbConfig.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import userRoute from "./routes/userRoute.js";
import visitorRoute from './routes/visitorRoute.js'
import createAdminAccount from "./scripts/admin.js";
import cors from "cors";

dotenv.config();

const app = express();

const allowedOrigins = ["http://localhost:5174", "http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth", authRoute);
app.use("/shop", productRoute);
app.use("/order", orderRoute);
app.use("/user", userRoute);
app.use("/visitor", visitorRoute);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectToMongoDB();
    console.log("Connected to MongoDB");

    await createAdminAccount();

    app.listen(port, () => {
      console.log(`Server listening on port ${port}!`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
  }
};

startServer();
