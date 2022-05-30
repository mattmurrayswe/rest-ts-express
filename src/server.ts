import 'dotenv/config'
import swaggerUi from "swagger-ui-express"
import express from "express"
import { router } from "./routes"

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve)
app.use(router)
app.listen(Number(process.env.PORT), '0.0.0.0', () => { console.log(`Listening on port ${process.env.PORT}`) });
