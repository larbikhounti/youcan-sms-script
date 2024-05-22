import express, { Request, Response } from 'express';
const app = express();



app.listen(3003, () => {
    console.log(`Server running at http://localhost:3000`)
  })

app.get("/", (req : Request, res : Response) => {
    res.send('test')
})



