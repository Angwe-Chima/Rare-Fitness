import Class from "../model/class.js";
import handleCatchError from "../utils/handleCatchError.js";

// Create a new class
export const createClass = async (req, res) => {
  try {
    const { id, urlTitle, title, courseImg, subClasses, topImage, description} = req.body;

    const newClass = new Class({
      id,
      urlTitle,
      title,
      courseImg,
      subClasses,
      topImage,
      description
    });

    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    handleCatchError(err, "createClass", res);
  }
};

// Get all classes
export const getClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate('subClasses');
    res.status(200).json({
      length: classes.length,
      data: classes,
    });
  } catch (err) {
    handleCatchError(err, "getClasses", res);
  }
};

// Get class by ID
export const getClassById = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.id).populate('subClasses');
    if (!classData) {
      return res.status(404).json({ error: "Class not found" });
    }
    res.status(200).json(classData);
  } catch (err) {
    handleCatchError(err, "getClassById", res);
  }
};

// Update a class by ID
export const updateClass = async (req, res) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate('subClasses');

    if (!updatedClass) {
      return res.status(404).json({ error: "Class not found" });
    }

    res.status(200).json({ success: true, data: updatedClass });
  } catch (err) {
    handleCatchError(err, "updateClass", res);
  }
};

// Delete a class by ID
export const deleteClass = async (req, res) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id);
    if (!deletedClass) {
      return res.status(404).json({ error: "Class not found" });
    }
    res.status(200).json({ message: "Class deleted" });
  } catch (err) {
    handleCatchError(err, "deleteClass", res);
  }
};
