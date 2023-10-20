import { VerifyToken } from "../utils/token.util.js";

export default async function AuthUser (req, res, next) {
    const token = req.params.token
    if (!token) {
      return res.status(401).json({ status: 401, message: 'session expired'});
    }

    const isVerified = await VerifyToken(token)
    req.auth = isVerified
    next()
}
  