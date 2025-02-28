import { Router, Request, Response } from 'express'
import { AuthSchema } from '../schemas/UserSchema'
import { UserModel } from '../db/db'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 5
const UserRouter = Router()

UserRouter.post('/register', async(req: Request, res: Response) => {
    try{
        const {success, data, error} = AuthSchema.safeParse(req.body)
        if(!success) {
            res.status(400).json({message:error.errors[0].message})
            return
        }else{
            const existingUser = await UserModel.findOne({username: data.username})
            if(existingUser){
                res.status(400).json({message: 'User already exists'})
                return
            }else{
                const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS)
                const user = await UserModel.create({...data, password: hashedPassword})
                res.status(200).json({message: 'User created successfully', user})
            }
        }
    }
    catch(error){
        res.status(500).json({message: 'Internal server error', error})
    }  
})

UserRouter.post('/login', async(req: Request, res: Response) => {
    try{
        const {success, data, error} = AuthSchema.safeParse(req.body)
        if(!success) {
            res.status(400).json({message:error.errors[0].message})
            return
        }else{
            const existingUser = await UserModel.findOne({username: data.username})
            if(existingUser){
                const passwordMatch = await bcrypt.compare(data.password, existingUser.password)
                if(passwordMatch){
                    const token = jwt.sign({userId: existingUser._id}, JWT_SECRET)
                    res.status(200).json({message: 'Login successful', user: existingUser, token})
                }else{
                    res.status(400).json({message: 'Invalid password'})
                }
            }else{
                res.status(400).json({message: 'User not found'})
            }
        }
    }
    catch(error){
        res.status(500).json({message: 'Internal server error', error})
    }
})

export default UserRouter
