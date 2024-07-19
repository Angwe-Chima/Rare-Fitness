// routes/visitor.js
import express from "express";
import { getVisitors, incrementVisitors } from "../controller/visitorController.js";

const router = express.Router();

router.get("/", getVisitors);
router.post("/", incrementVisitors);

export default router;
