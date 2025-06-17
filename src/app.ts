import express, { Request, Response } from "express"
import pinoHttp from "pino-http"
import logger from "./lib/logger"

const app = express()

app.set('views', './view')
app.set('view engine', 'ejs')

app.use(pinoHttp({ logger }))

app.get("/teacher/add", (req : Request, res : Response) : any => {
    res.render("teacher-add")
})

export default app