import { dbFindUser } from "../services/database.service.js";
import AppError from "../utils/app.error.utils.js";
import { TryCatch } from "../utils/try-catch.utils.js";

const FindUser = TryCatch( async (req,_res,next)=>{
    const { id , email } = req.body

    //check for request body
    if(!id && !email) throw new AppError(404,'Details cannot be empty')

    //continue to find user if request body
    const user = await dbFindUser( id, email )
    req.user = user
    next() 
})

export default FindUser