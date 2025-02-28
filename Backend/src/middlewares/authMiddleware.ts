import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config'

interface JwtPayload {
    userId: string;
}

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"]
    if(!authHeader){
        res.status(401).json({ message: "Authorization header missing or invalid" });
        return
    }else{
        const token = authHeader
        if(!token){
            res.status(401).json({ message: "Token missing" });
            return
        }else{
            const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
            if(decoded){
                req.body.userId = decoded.userId
                next()
            }else{
                res.status(401).json({ message: "Invalid token" });
                return
            }
        }
    }
}

export default authMiddleware


