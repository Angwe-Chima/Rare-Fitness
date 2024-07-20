const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the subClass schema
const subClassSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Define the class schema
const classSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  urlTitle: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  courseImg: {
    type: String,
    required: true,
  },
  Component: {
    type: String,
    required: true,
  },
  subClasses: [subClassSchema],
});

// Create the models
const Class = mongoose.model("Class", classSchema);
const SubClass = mongoose.model("SubClass", subClassSchema);

module.exports = { Class, SubClass };
