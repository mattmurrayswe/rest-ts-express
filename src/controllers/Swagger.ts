import swaggerUi from "swagger-ui-express"
import * as fs from 'fs'
import { Request as ExpressRequest, Response as ExpressResponse } from "express"
export class Controller {
    private swaggerDocument: object
    constructor() {
        this.swaggerDocument = this.readSwaggerJsonFile()
    }
    private readSwaggerJsonFile() {
        return fs.readFileSync('/swagger.json')
    }
    public exec(res: ExpressResponse) {
        res.status(200).json({
            'todo':'The deadline was close, sorry, :Ç',
            'docs':'There is README.md as documentation for each service. Navigate to: /src/service/../README.md for full documentation.' 
        })
        return swaggerUi.setup(this.swaggerDocument)
    }
}
