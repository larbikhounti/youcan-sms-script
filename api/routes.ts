import { Request, Response, Router } from "express";
const sendMessage = require('./twilio')
const router = Router()



router.post('/webhook',async (req : Request , res : Response)=> {
   // console.log(req.body)
    try {
       await sendMessage(req.body.customer)
        res.status(200).json("message : ok")
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
   
})


export default router