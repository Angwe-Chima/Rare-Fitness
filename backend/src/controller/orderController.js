import Order from '../model/order.js';
import Product from '../model/product.js';
import handleCatchError from '../utils/handleCatchError.js';

export const createOrder = async (req, res) => {
  try {
    const { products } = req.body;

    let totalPrice = 0;
    const productDetails = await Promise.all(
      products.map(async (item) => {
        const product = await Product.findById(item.product);
        if (!product) {
          throw new Error(`Product with ID ${item.product} not found`);
        }
        totalPrice += product.price * item.quantity;
        return {
          product: product._id,
          quantity: item.quantity,
          // Remove price from here since it's calculated dynamically
        };
      })
    );

    const newOrder = new Order({
      user: req.user._id, // Assuming req.user is populated with the authenticated user
      products: productDetails,
      totalPrice, // Correct totalPrice is now dynamically calculated
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    handleCatchError(err, 'createOrder', res);
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.product');
    res.status(200).json({
      length: orders.length,
      data: orders
    });
  } catch (err) {
    handleCatchError(err, 'getOrders', res);
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user').populate('products.product');
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (err) {
    handleCatchError(err, 'getOrderById', res);
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (err) {
    handleCatchError(err, 'updateOrderStatus', res);
  }
};
