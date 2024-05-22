import { Request, Response, Router } from "express";

const router = Router()



router.post('/webhook', (req : Request , res : Response)=> {
   // console.log(req)
    res.status(200).json(req.body)
})


export default router