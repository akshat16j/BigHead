import mongoose from 'mongoose'
import { Link } from 'react-router-dom'
import { MONGO_URI } from '../config/config'

mongoose.connect(MONGO_URI)

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const ContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    contentType:{
        type: String,
        required: true,
        enum: ['video', 'insta', 'music', 'links', 'document', 'text',"tweets"]
    },
    link:{
        type: String,
        default: ''
    },
    description:{
        type: String,
        default: ''
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    contentId:{
        type: String,
        required: true
    },
    tags:{
        type: [String],
        default: []
    },
})

const UserModel = mongoose.model('BigHeadUsers', UserSchema)
const ContentModel = mongoose.model('Content', ContentSchema)

export {UserModel, ContentModel}
