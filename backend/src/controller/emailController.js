import Email from '../model/email.js'; // Adjust the import path as necessary

// POST: Create a new email entry
export const createEmail = async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    // Validate required fields
    if (!fullName || !message || !phone) {
      return res.status(400).json({ error: "Please fill in all required fields." });
    }

    // Create new email document
    const newEmail = new Email({ fullName, email, phone, message });
    await newEmail.save();

    res.status(201).json({ message: "Email message stored successfully!" });
  } catch (error) {
    console.error("Error creating email:", error);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
};

// GET: Retrieve all email entries
export const getEmails = async (req, res) => {
  try {
    const emails = await Email.find(); // No need to populate user details
    res.status(200).json(emails);
  } catch (error) {
    console.error("Error retrieving emails:", error);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
};

// DELETE: Delete a specific email entry by ID
export const deleteEmail = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate the ID
    if (!id) {
      return res.status(400).json({ error: "Email ID is required." });
    }

    // Delete the email document
    const result = await Email.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ error: "Email not found." });
    }

    res.status(200).json({ message: "Email deleted successfully." });
  } catch (error) {
    console.error("Error deleting email:", error);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
};
