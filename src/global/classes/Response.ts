import { Request as ExpressRequest } from "express"
import { ValidationError } from "joi"
export class Response{

    private api = 'REST API - Financial Services '
    private service: string
    private requestInfo: string
    public status!: string
    public statusCode!: number
    public mainData!: ValidationError | object

    constructor(service: string, req: ExpressRequest) {
        this.service = service
        this.requestInfo = this.generateRequestInfo(req)
    }
    private generateRequestInfo(req: ExpressRequest): string {
        return req.method + ': ' + req.protocol + '://' + req.hostname + req.path
    }
}
