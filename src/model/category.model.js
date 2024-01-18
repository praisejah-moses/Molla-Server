import { db } from "../../init.module.js"


const CategorySchema = new db.Schema({
  categoryname: {
    type: String,
    unique: true
  },
  active: {
    type: Boolean,
    default: true
  },
  products: [
    {
      type: db.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})
export const CategoryModel = db.model("Category", CategorySchema);