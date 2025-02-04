import express from 'express'
import UserRouter from './routes/UserRoutes'
import { MONGO_URI, PORT, JWT_SECRET } from './config/config'
import mongoose from 'mongoose'
import ContentRouter from './routes/ContentRoute'
import cors from 'cors'

mongoose.connect(MONGO_URI)

const app = express()

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173', process.env.FRONTEND_URL || '']
}))



app.use('/api', UserRouter)
app.use('/api', ContentRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})