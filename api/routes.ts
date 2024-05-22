import { Request, Response, Router } from "express";

const router = Router()



router.post('/webhook', (req : Request , res : Response)=> {
    res.json(req.body)
})


export default router