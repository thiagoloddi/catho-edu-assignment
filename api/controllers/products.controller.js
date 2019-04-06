import mongoose from 'mongoose';

export const getAll = async () => {
  const Products = mongoose.model('products');

  try {
    const data = await Products.find();
    return { status: 200, data };
  } catch(e) {
    return { status: 500, data: e };
  }
}