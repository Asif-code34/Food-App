import express from 'express'
const foodrouter = express.Router()
import multer from 'multer';
import {addFood, listFood, removeFood} from '../controllers/foodController.js'

//Image Storage System
const Storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload =multer({storage:Storage})


foodrouter.post('/add',upload.single("image"),addFood)
foodrouter.get('/list',listFood)
//delete food
foodrouter.post('/remove',removeFood)

export default foodrouter;
