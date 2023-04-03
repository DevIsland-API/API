import express from "express";
import "./config/dotenv";
import { appRoutes } from "./routes";
const app = express();

app.use(express.json());
app.use(appRoutes());

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

app.listen(PORT, (): void => {
  console.log("*** Powered by DEV Island ***");
  console.log(`*** Application: ${process.env.APP_NAME} ***`);
  console.log(`*** Development Statement running on ${PORT} port ***`);
  console.log(`*** http://localhost:${PORT} ***`);
  console.log(`***${ENV}***`);
});
