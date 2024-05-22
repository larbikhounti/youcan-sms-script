import { Request, Response, Router } from "express";
const sendMessage = require('./twilio')
const router = Router()



router.post('/webhook', (req : Request , res : Response)=> {
    console.log(req.body)
    try {
        sendMessage(req.body)
    } catch (error) {
        console.log(error)
    }
    sendMessage()
    res.status(200).json("message : ok")
})


export default router