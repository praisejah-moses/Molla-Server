import AppError from "../utils/app.error.utils.js";
import { VerifyToken } from "../utils/token.util.js";
import { TryCatch } from "../utils/try-catch.utils.js";

const AuthUser = TryCatch(async(req, res, next)=>{
    const token = (req.params.token||req.header('x-auth-token').split(' ')[1])
    
    //check for token
    if (!token) throw new AppError(401,'Token not found or expired')
    
    //continue to validate token
    const isVerified = await VerifyToken(token)
    req.auth = isVerified
    next()
})
  
export default AuthUser