import express from 'express'
import depoimentos from "./routes/depoimentosRouter.js"
import cors from "cors"

const app = express();
app.use(cors())

//app.use(cors({
//    origin:["dominio.com", "dominio2.com"]
//}))

app.use(express.json());
app.use('/depoimentos', depoimentos);

export default app