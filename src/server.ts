import express, { Express,  } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import Router from "./routes";

dotenv.config();
const app: Express = express();

console.log(process.env.PORT);

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.static("public"));


const port = process.env.PORT;

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(Router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});