import mongoose from "mongoose";
const { Schema } = mongoose;

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
  topImage:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  subClasses: [
    {
      type: Schema.Types.ObjectId,
      ref: "SubClass"
    }
  ],
});

const Class = mongoose.model("Class", classSchema);

export default Class;
