import express, { Request, Response } from 'express';
import router from './routes';

const app = express();

// Use express.json() to parse JSON bodies
app.use(express.json());

// Use the imported router for routes
app.use(router);

// Basic test route
app.get('/', (req: Request, res: Response) => {
  res.send('test');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
