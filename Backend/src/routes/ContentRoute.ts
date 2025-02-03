import { Router, Request, Response } from 'express'
import { z } from 'zod'
import { AuthSchema} from '../schemas/UserSchema'
import { ContentModel, FolderModel, UserModel } from '../db/db'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config'
import bcrypt from 'bcrypt'
import authMiddleware from '../middlewares/authMiddleware'
import { ContentSchema } from '../schemas/ContentSchema'
import { FolderSchema } from '../schemas/FolderSchema'

const ContentRouter = Router()

ContentRouter.post('/add-content', authMiddleware, async(req: Request, res: Response) => {
    try {
        const {success, data, error} = ContentSchema.safeParse(req.body);
        if(!success) {
            res.status(400).json({errors: error.errors});
            return;
        }
        
        // Add console.log to debug
        console.log('Request body:', req.body);
        console.log('Query folder:', req.query.folder);
        
        const content = await ContentModel.create({
            ...data, 
            userId: req.body.userId,
            folder: req.query.folder || null  // Make sure folder is optional
        });
        
        res.status(200).json({message: 'Content created successfully', content});
    }
    catch(error) {
        console.error('Server error:', error);  // Add detailed error logging
        res.status(500).json({message: 'Internal server error', error: error instanceof Error ? error.message : 'Unknown error'});
    }
});

ContentRouter.get('/content', authMiddleware, async(req: Request, res: Response) => {
    try{
        const { folder } = req.query;
        const content = await ContentModel.find({
            userId: req.body.userId,
            folder: folder ? folder : null
        })
        res.status(200).json({content})
    }catch(err){
        res.status(500).json({message: 'Internal server error',error: err instanceof Error ? err.message : 'Unknown error'})
    }
})


ContentRouter.post('/add-folder', authMiddleware, async(req: Request, res: Response) => {
    try {
        const { folder } = req.query
        const { parentFolder } = req.body
        const {success, data, error} = FolderSchema.safeParse({name: folder, parentFolder: parentFolder}) 
        if(!success){
            res.status(400).json({errors: error.errors})
            return
        }
        const newFolder = await FolderModel.create({
            name: folder,
            userId: req.body.userId,
            parentFolder: parentFolder || null 
        })
        
        res.status(200).json({
            message: 'Folder added successfully',
            folder: newFolder
        })
    } catch(err) {
        console.error('Error creating folder:', err)
        res.status(500).json({
            message: 'Internal server error',
            error: err instanceof Error ? err.message : 'Unknown error'
        })
    }
})
ContentRouter.get('/folders', authMiddleware, async(req: Request, res: Response) => {
    try{
        const { parentFolder } = req.query
        const folders = await FolderModel.find({
            userId: req.body.userId,
            parentFolder: parentFolder ? parentFolder : null 
        })
        res.status(200).json({folders})
    }catch(err){
        res.status(500).json({message: 'Internal server error',error: err instanceof Error ? err.message : 'Unknown error'})
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