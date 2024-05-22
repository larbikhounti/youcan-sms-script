import { Request, Response, Router } from "express";

const router = Router()



router.post('/webhook', (req : Request , res : Response)=> {
    console.log(req.body)
    res.status(200).json("message : ok")
})


export default router