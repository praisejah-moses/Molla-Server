import { dbVerifyUser } from "../../../services/database.service.js";
import { GenerateToken } from "../../../utils/token.util.js";

export default async function ConfirmEmail(req,res) {
   const authenticated = req.auth

   if(!authenticated) throw new AppError(401,'Invalid confirmation link')

   await dbVerifyUser(authenticated.id).catch(console.log('Unable to verify user'))
   
   return res.status(200).json({
       status:200,
       message:'User has been succesfully verified',
       token: await GenerateToken(authenticated.id)
   })   
}

