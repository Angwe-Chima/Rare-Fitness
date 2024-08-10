import Product from "../model/product.js";
import handleCatchError from "../utils/handleCatchError.js";


export const getShopProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      length: products.length,
      data: products,
    });
  } catch (err) {
    handleCatchError(err, "getProducts", res);
  }
};

export const getShopProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    handleCatchError(err, "getProductById", res);
  }
};