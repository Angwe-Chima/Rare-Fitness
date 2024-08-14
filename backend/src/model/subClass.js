import mongoose from "mongoose";
const { Schema } = mongoose;

const subClassSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructors: [
    {
      name: {
        type: String,
        required: true,
      },
      bio: String,
      photo: String,
    },
  ],
  duration: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  curriculum: [
    {
      week: Number,
      content: String,
    },
  ],
  learningOutcomes: [
    {
      outcome: String,
    },
  ],
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: String,
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  language: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const SubClass = mongoose.model("SubClass", subClassSchema);

export default SubClass;
