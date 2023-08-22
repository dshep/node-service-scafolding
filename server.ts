import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World From the Typescript Server!')
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server iss running at http://localhost:${port}`);
});