import mongoose from "mongoose";
const { Schema } = mongoose;

const classSchema = new Schema({
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
  // Link to the SubClasses collection
  subClasses: [
    {
      type: Schema.Types.ObjectId,
      ref: "SubClass"
    }
  ],
});

const Class = mongoose.model("Class", classSchema);

export default Class;
