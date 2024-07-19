import User from '../model/user.js';
import bcrypt from 'bcryptjs';
import handleCatchError from '../utils/handleCatchError.js';

export const createUser = async (req, res) => {
  try {
    const { fullName, user, email, password, role } = req.body;

    // Check if user already exists
    const foundUser = await User.findOne({ user });
    if (foundUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      fullName,
      user,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    handleCatchError(err, 'createUser', res);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      length: users.length,
      data: users
    });
  } catch (err) {
    handleCatchError(err, 'getUsers', res);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    handleCatchError(err, 'getUserById', res);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { fullName, user, email, password, role } = req.body;

    // If password is being updated, hash it
    let updatedFields = { fullName, user, email, role };
    if (password) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      updatedFields.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedFields, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    handleCatchError(err, 'updateUser', res);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    handleCatchError(err, 'deleteUser', res);
  }
};
