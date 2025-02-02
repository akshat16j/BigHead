import { Router, Request, Response } from 'express'
import { z } from 'zod'
import { AuthSchema} from '../schemas/UserSchema'
import { ContentModel, FolderModel, UserModel } from '../db/db'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config'
import bcrypt from 'bcrypt'
import authMiddleware from '../middlewares/authMiddleware'
import { ContentSchema } from '../schemas/ContentSchema'

const ContentRouter = Router()

ContentRouter.post('/add-content', authMiddleware, async(req: Request, res: Response) => {
    try{
        const {success, data, error} = ContentSchema.safeParse(req.body)
        if(!success){

            res.status(400).json({errors: error.errors})
            return
        }else{
            const content = await ContentModel.create({...data, userId: req.body.userId,folder: req.query.folder})
            res.status(200).json({message: 'Content created successfully', content})
        }
    }
    catch(error){
        res.status(500).json({message: 'Internal server error'})
    }
})

ContentRouter.get('/content', authMiddleware, async(req: Request, res: Response) => {
    try{
        const content = await ContentModel.find({userId: req.body.userId,folder: req.query.folder})
        res.status(200).json({content})
    }catch(err){
        res.status(500).json({message: 'Internal server error'})
    }
})

ContentRouter.post('/add-folder', authMiddleware, async(req: Request, res: Response) => {
    try{
        const {folder} = req.query
        const folders = await FolderModel.create({name: folder, userId: req.body.userId})
        res.status(200).json({message: 'Folder added successfully', folders})
    }catch(err){
        res.status(500).json({message: 'Internal server error'})
    }
})

ContentRouter.get('/folders', authMiddleware, async(req: Request, res: Response) => {
    try{
        const folders = await FolderModel.find({userId: req.body.userId})
        res.status(200).json({folders})
    }catch(err){
        res.status(500).json({message: 'Internal server error'})
    }
})

ContentRouter.delete('/delete-folder', authMiddleware, async(req: Request, res: Response) => {
    try{
        const {folderId} = req.query
        const folders = await FolderModel.deleteOne({_id: folderId, userId: req.body.userId})
        res.status(200).json({message: 'Folder deleted successfully', folders})
    }catch(err){
        res.status(500).json({message: 'Internal server error'})
    }
})

ContentRouter.delete('/delete-content', authMiddleware, async(req: Request, res: Response) => {
    try{
        const {id} = req.query
        const content = await ContentModel.deleteOne({_id: id, userId: req.body.userId})
        res.status(200).json({message: 'Content deleted successfully', content})
    }catch(err){
        res.status(500).json({message: 'Internal server error'})
    }
})

export default ContentRouter