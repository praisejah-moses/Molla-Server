import { Validate } from "../../../utils/encryption.util.js";
import { GenerateToken } from "../../../utils/token.util.js";

export default async function LoginUser(req,res) {
    const user = req.user
    const {email,password} = req.body

    if(!user) return res.status(404).json({
        status:404, 
        message:'A user with that email does not exist, sign up'
    });

    const isValid =  await Validate(password,user.password)

    if (isValid) return res.status(200).json({
        status:200,
        message:'User logged in succesfully',
        data:{firstname:user.firstname, lastname:user.lastname,email:user.email,id:user.id},
        token: await GenerateToken(user.id)  
    });

    return res.status(401).json({
        status:401,
        message:'Password dont match'
    })
}

