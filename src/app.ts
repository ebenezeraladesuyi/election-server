import express, { Application, Request, Response } from "express";
import cors from "cors";
import electionRoutes from "./router/ElectionRoutes";


const appConf = (app: Application) => {
    app.use(express.json()).use(cors());

    // routes
    app.use("/elect", electionRoutes)


    app.get("/", (req:Request, res: Response): any => {
        return res.status(200).json({
            message: "default get them wella"
        })
    })
}

export default appConf;