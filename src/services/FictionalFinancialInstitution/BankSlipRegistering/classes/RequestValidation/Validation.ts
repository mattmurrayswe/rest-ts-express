import { Request as ExpressRequest, Response as ExpressResponse, NextFunction as ExpressNextFunction } from "express";
import { ValidationResult } from "joi";
import { FacadeJoi } from "./FacadeJoi";
import { ValidationHandler } from "./ValidationHandler";
import { Response } from "../../../../../global/classes/Response";
export class Validation {

    private response: Response;
    private req: ExpressRequest;

    constructor(req: ExpressRequest) {
        this.response = new Response('Bank Slip Registering  - Financial Institution', req)
        this.req = req
    }
    public validateRequest(res: ExpressResponse, next: ExpressNextFunction) {
        const validation: ValidationResult = this.joiValidate()
        const handledValidation: ValidationHandler = this.handleValidation(validation)
        if (handledValidation.status == 'Error') {
            this.setResponse(handledValidation)
            return res.status(handledValidation.statusCode!).json(this.response)
        }
        next()
    }
    private joiValidate(): ValidationResult {
        return new FacadeJoi().validate(this.req.body)
    }
    private handleValidation(validation: any): ValidationHandler {
        return new ValidationHandler(validation)
    }
    private setResponse(response: ValidationHandler) {
        this.response.status = response.status!
        this.response.statusCode = response.statusCode!
        this.response.mainData = response.data!
    }
}