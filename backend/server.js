import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import foodrouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
 const app = express()
const port = process.env.PORT || 4000
dotenv.config()

//middleware
app.use(express.json())
app.use(cors())

//connect to Db
connectDB()

app.use('/api/food',foodrouter);
app.use("/api/user", userRouter)
app.use('/api/cart',cartRouter);
app.use("/api/order",orderRouter)
app.use('/images',express.static('uploads'))

app.get('/',(req,res)=>{
    res.send("api working")
})
 app.listen(port,()=>{
    console.log("server running")
 })
 export default app