import Class from "../model/class.js";
import SubClass from "../model/subClass.js";
import handleCatchError from "../utils/handleCatchError.js";

// Add a subclass to a class
export const addSubClass = async (req, res) => {
  try {
    const { title, description, instructors, duration, rating, time, curriculum, learningOutcomes, reviews, language } = req.body;
    const classData = await Class.findById(req.params.classId);

    if (!classData) {
      return res.status(404).json({ error: "Class not found" });
    }

    const newSubClass = new SubClass({
      title,
      description,
      instructors,
      duration,
      rating,
      time,
      curriculum,
      learningOutcomes,
      reviews,
      language,
    });

    await newSubClass.save();
    
    classData.subClasses.push(newSubClass._id);
    await classData.save();

    res.status(201).json(classData);
  } catch (err) {
    handleCatchError(err, "addSubClass", res);
  }
};

// Get all subclasses within a class
export const getSubClassesByClassId = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.classId).populate('subClasses');

    if (!classData) {
      return res.status(404).json({ error: "Class not found" });
    }

    res.status(200).json({
      length: classData.subClasses.length,
      data: classData.subClasses,
    });
  } catch (err) {
    handleCatchError(err, "getSubClassesByClassId", res);
  }
};

// Get a subclass by ID
export const getSubClassById = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.classId).populate('subClasses');

    if (!classData) {
      return res.status(404).json({ error: "Class not found" });
    }

    const subClass = classData.subClasses.id(req.params.subClassId);
    if (!subClass) {
      return res.status(404).json({ error: "Subclass not found" });
    }

    res.status(200).json(subClass);
  } catch (err) {
    handleCatchError(err, "getSubClassById", res);
  }
};

// Update a subclass by ID
export const updateSubClass = async (req, res) => {
  try {
    const { title, description, instructors, duration, rating, time, curriculum, learningOutcomes, reviews, language } = req.body;
    const classData = await Class.findById(req.params.classId);

    if (!classData) {
      return res.status(404).json({ error: "Class not found" });
    }

    const subClass = classData.subClasses.id(req.params.subClassId);
    if (!subClass) {
      return res.status(404).json({ error: "Subclass not found" });
    }

    subClass.title = title || subClass.title;
    subClass.description = description || subClass.description;
    subClass.instructors = instructors || subClass.instructors;
    subClass.duration = duration || subClass.duration;
    subClass.rating = rating || subClass.rating;
    subClass.time = time || subClass.time;
    subClass.curriculum = curriculum || subClass.curriculum;
    subClass.learningOutcomes = learningOutcomes || subClass.learningOutcomes;
    subClass.reviews = reviews || subClass.reviews;
    subClass.language = language || subClass.language;

    await classData.save();

    res.status(200).json(subClass);
  } catch (err) {
    handleCatchError(err, "updateSubClass", res);
  }
};

// Delete a subclass by ID
export const deleteSubClass = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.classId);

    if (!classData) {
      return res.status(404).json({ error: "Class not found" });
    }

    const subClass = classData.subClasses.id(req.params.subClassId);
    if (!subClass) {
      return res.status(404).json({ error: "Subclass not found" });
    }

    subClass.remove();
    await classData.save();

    res.status(200).json({ message: "Subclass deleted" });
  } catch (err) {
    handleCatchError(err, "deleteSubClass", res);
  }
};
