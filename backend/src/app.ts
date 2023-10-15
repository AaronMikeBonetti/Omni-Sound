import express from "express";
import bodyParser from "body-parser";
import { logger } from "./lib";
import cors from "cors";
import router from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(logger);
app.use("/", express.static("./client"));
app.use("/", router);

app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}))

export default app;