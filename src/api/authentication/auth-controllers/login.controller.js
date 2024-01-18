import AppError from "../../../utils/app.error.utils.js";
import { Validate } from "../../../utils/encryption.util.js";
import { GenerateToken } from "../../../utils/token.util.js";
import { TryCatch } from "../../../utils/try-catch.utils.js";

const LoginUser = TryCatch(async(req,res) => {
    const user = req.user
    const {email,password} = req.body

    if(!email || !password) throw new AppError (400,'Login details cannot be empty')
    if(!user) throw new AppError (404,'A User with that details does not exist')

    const isValid =  await Validate(password,user.password)

    if (!isValid) throw new AppError(401,'Password is incorrect')

    return res.status(200).json({
        status:200,
        message:'User logged in succesfully',
        data:{firstname:user.firstname, lastname:user.lastname,email:user.email,id:user.id},
        token: await GenerateToken(user.id)  
    })
})

export default LoginUser