import { CategoryModel } from "../model/category.model.js";
import { ProductModel } from "../model/products.model.js";
import { UserModel } from "../model/users.model.js";

export const dbCreateUser = async(firstname,lastname,email,password)=>{
    const user = await UserModel.create({
        firstname,
        lastname,
        email,
        password,
    });
    return user
}

export const dbFindUser = async(id,email) =>{
    const user = await UserModel.findOne(
        { $or: [{ _id:id },{ email:email }] }
    ).lean();
    return user
}

export const dbVerifyUser = async (id) => {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { verified: true },
      { new: true }
    ).select('_id username');
  
    return user;
}

export const dbdeleteUser = async(email)=>{
  await UserModel.deleteOne({ email })
}

export const dbAddCategory = async(categoryname)=>{
  const category = await CategoryModel.create({
    categoryname,
  })
  return category
}

export const dbFindCategory = async(categoryname)=>{

  if(categoryname){
    const category = await CategoryModel.find({
      categoryname
    })

    return category
  }
  
  const category = await CategoryModel.find({
    active:true
  })
  return category
}

export const dbUpdateCategory= async(categoryname,anon)=>{
  const category = await CategoryModel.findOneAndUpdate(
    {categoryname},
    {$push:{products:anon}}
  )
  return category
}

export const dbAddProduct = async(productDetails)=>{
  const category = await ProductModel.create({
    sku:productDetails.sku,
    name:productDetails.name,
    type:productDetails.type,
    imageUrl:productDetails.imageUrl,
    description:productDetails.description,
    quantity:productDetails.quantity,
    price:productDetails.price,
    isActive:productDetails.isActive,
  })
  return category
}

export const dbFindProduct = async(sku)=>{

  if(sku){
    const product = await ProductModel.find({
      sku
    })
    return product
  }
  
  const products = await ProductModel.find({
    isActive:true
  })
  return products
}