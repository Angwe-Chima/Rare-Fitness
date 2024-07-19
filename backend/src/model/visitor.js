// models/visitor.js
import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

export default Visitor;
