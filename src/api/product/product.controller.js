import { dbAddProduct, dbFindCategory, dbFindProduct, dbUpdateCategory } from "../../services/database.service.js";
import AppError from "../../utils/app.error.utils.js";
import { TryCatch } from "../../utils/try-catch.utils.js";

export const AddProduct = TryCatch(async(req, res) => {
  const productDetails = req.body

  if (!productDetails) throw new AppError(400,'No category name')


  const product = await dbAddProduct(productDetails).catch(err => {throw new AppError(400)})
  console.log(product._id.toString(),productDetails.type)

  dbUpdateCategory(productDetails.type,product._id.toString())

  res.status(200).json({
    status: 200,
    message: `Product has been added successfully!`,
  })
})

export const GetProduct = TryCatch(async(req, res) => {
  const {sku} = req.body

  const product = await dbFindProduct(sku)

  res.status(200).json({
    status: 200,
    product
  })
})

//TODO Update
//TODO Delete


