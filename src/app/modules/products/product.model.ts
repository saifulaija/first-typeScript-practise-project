import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

const ProductSchema = new Schema<Product>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: { type: String, required: true },
  isDiscount: { type: Boolean, required: true },
});

export const ProductModel = model<Product>('product', ProductSchema);
