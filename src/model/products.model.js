import { db } from '../../init.module.js';


// DATABASE SCHEMA AND MODEL
const ProductSchema = new db.Schema({
  sku: {
    type: String
  },
  name: {
    type: String,
    trim: true
  },
  type: {
    type: String,
  },
  imageUrl: {
    type: String
  },
  description: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  },
  isActive: {
    type: Boolean,
    default: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

export const ProductModel = db.model("Product", ProductSchema);