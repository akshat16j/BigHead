import express from 'express'
import UserRouter from './routes/UserRoutes'
import { MONGO_URI, PORT, JWT_SECRET } from './config/config'
import mongoose from 'mongoose'

mongoose.connect(MONGO_URI)

const app = express()

app.use(express.json())

app.use('/api', UserRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})