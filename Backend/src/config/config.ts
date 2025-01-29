import dotenv from 'dotenv'
dotenv.config()

export const MONGO_URI = process.env.MONGO_URI || ''
export const PORT = process.env.PORT || 3000
export const JWT_SECRET = process.env.JWT_SECRET || ''

if (!MONGO_URI) {
    throw new Error('MONGO_URI is not defined in environment variables')
} 

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables')
} 