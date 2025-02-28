import mongoose from 'mongoose'
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
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    tags:{
        type: [String],
        default: []
    },
    folder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Folder',
        default: null,
        required: false
    },
    links: {
        type: String,
        default: ''
    }
})


const FolderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    parentFolder:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Folder',
        default: null,
        required: false
    }
})




const UserModel = mongoose.model('BigHeadUsers', UserSchema)
const ContentModel = mongoose.model('Content', ContentSchema)
const FolderModel = mongoose.model('Folder', FolderSchema)
export {UserModel, ContentModel, FolderModel}


