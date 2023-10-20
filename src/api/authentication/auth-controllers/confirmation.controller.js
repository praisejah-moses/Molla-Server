import { dbVerifyUser } from "../../../services/db.service.js";
import { GenerateToken } from "../../../utils/token.util.js";

export default async function ConfirmEmail(req,res) {
   const authenticated = req.auth
   if(authenticated){ 
     const isVerified = await dbVerifyUser(authenticated.id)
     if (isVerified) return res.status(200).json(
        {
            status:200,
            message:'User has been succesfully verified',
            token: await GenerateToken(authenticated.id)
        })
    }

    return res.status(401).json({
        status:401,
        message:'Invalid confirmation link',
        token
    })
}