import { Router, Request, Response } from 'express'
import { z } from 'zod'
import { AuthSchema} from '../schemas/UserSchema'
import { ContentModel, UserModel } from '../db/db'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config'
import bcrypt from 'bcrypt'
import authMiddleware from '../middlewares/authMiddleware'
import { ContentSchema } from '../schemas/ContentSchema'

const ContentRouter = Router()

ContentRouter.post('/content', authMiddleware, async(req: Request, res: Response) => {
    try{
        const {success, data, error} = ContentSchema.safeParse(req.body)
        if(!success){
            res.status(400).json({errors: error.errors})
            return
        }else{
            const content = await ContentModel.create({...data, userId: req.body.userId})
            res.status(200).json({message: 'Content created successfully', content})
        }
    }
    catch(error){
        res.status(500).json({message: 'Internal server error'})
    }
})

export default ContentRouter