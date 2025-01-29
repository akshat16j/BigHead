import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { AuthSchema } from '../schemas/UserSchema'
import { UserModel } from '../db/db'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config'
import bcrypt from 'bcrypt'

interface JwtPayload {
    userId: string;
}

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"]
    if(!authHeader){
        res.status(401).json({ message: "Authorization header missing or invalid" });
        return
    }else{
        const token = authHeader.split(" ")[1]
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


