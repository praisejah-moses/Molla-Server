import { dbCreateUser, dbdeleteUser } from "../../../services/db.service.js";
import AppError from "../../../utils/app.error.utils.js";
import { Hash } from "../../../utils/encryption.util.js";
import { SendEmail } from "../../../utils/mail.utils.js";
import { GenerateToken } from "../../../utils/token.util.js";
import { TryCatch } from "../../../utils/try-catch.utils.js";

const CreateUser = TryCatch(async(req,res)=>{
    const userAlreadyExist = req.user
    const {firstname,lastname,email,password} = req.body

    if(userAlreadyExist) throw new AppError (400,'User with this email already exist, login to continue')
    if(!firstname || !lastname || !email || !password) throw new AppError (400,'Registration details incomplete')
    
    //create new user if user doesnt exist
    const userCreated = await dbCreateUser(firstname,lastname,email, await Hash(password))

    if(userCreated){
      const token = await GenerateToken(userCreated._id)
      
      //send vericfication link
      await SendEmail(userCreated.email,'','',token).catch((error) => {dbdeleteUser(email); throw new AppError(400,error.message) })

      return res.status(201).json({
        status:201,
        message: 'Signup succesfull, confirm your email to continue'
      })
  }})

export default CreateUser;