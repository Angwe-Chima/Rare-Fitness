// controllers/visitor.js
import Visitor from "../model/visitor.js";

export const getVisitors = async (req, res) => {
  try {
    const visitorData = await Visitor.findOne();
    if (!visitorData) {
      const newVisitorData = new Visitor({ count: 0 });
      await newVisitorData.save();
      return res.status(200).json({ count: newVisitorData.count });
    }
    res.status(200).json({ count: visitorData.count });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const incrementVisitors = async (req, res) => {
  try {
    let visitorData = await Visitor.findOne();
    if (!visitorData) {
      visitorData = new Visitor({ count: 0 });
    }
    visitorData.count += 1;
    await visitorData.save();
    res.status(200).json({ count: visitorData.count });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
