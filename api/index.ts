import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import router from "./routes"
const app = express();
app.use(bodyParser())
app.use(router)


app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`)
  })

app.get("/", (req : Request, res : Response) => {
    res.send('test')
})



