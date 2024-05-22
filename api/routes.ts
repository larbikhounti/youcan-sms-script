import { Request, Response, Router } from "express";
const sendMessage = require('./twilio');
const router = Router();

router.post('/webhook', async (req: Request, res: Response) => {
    try {
        await sendMessage(req.body.customer);
        res.status(200).json({ message: "ok" });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
