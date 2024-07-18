import Product from '../model/product.js';
import handleCatchError from '../utils/handleCatchError.js';

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, imageUrl, rating } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
      rating: {
        stars: rating?.stars || 0,
        numberOfRatings: rating?.numberOfRatings || 0,
      }
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    handleCatchError(err, 'createProduct', res);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    handleCatchError(err, 'getProducts', res);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    handleCatchError(err, 'getProductById', res);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    handleCatchError(err, 'updateProduct', res);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    handleCatchError(err, 'deleteProduct', res);
  }
};
