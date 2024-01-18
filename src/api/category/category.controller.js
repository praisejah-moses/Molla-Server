import { dbAddCategory, dbFindCategory } from "../../services/database.service.js";
import AppError from "../../utils/app.error.utils.js";
import { TryCatch } from "../../utils/try-catch.utils.js";

export const AddCategory = TryCatch(async(req, res) => {
  const {categoryname} = req.body

  if (!categoryname) throw new AppError(400,'No category name')

  await dbAddCategory(categoryname.toLowerCase()).catch(err => {throw new AppError(400)})

    res.status(200).json({
      status: 200,
      message: `Category has been added successfully!`,
    })
})

export const GetCategories = TryCatch(async(req, res) => {
  const {categoryname} = req.body
    const categories = await dbFindCategory(categoryname)
    
    res.status(200).json({  
      status:200,
      categories:categories
    })  
  }
)

//TODO Delete category
//TODO Patch category

