import express, {Application } from "express";
import dbConfig from "./config/db";
import appConf from "./app";


const app: Application = express();
appConf(app)
dbConfig()


const port = 2024


app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})