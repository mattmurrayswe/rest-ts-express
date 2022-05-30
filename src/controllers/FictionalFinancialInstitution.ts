import { Request as ExpressRequest, Response as ExpressResponse } from "express"
import { BankSlipRegistering } from "../services/FictionalFinancialInstitution/BankSlipRegistering/BankSlipRegistering"
import { FinancialInstitutionResponseHandler } from "../services/FictionalFinancialInstitution/BankSlipRegistering/classes/Request/FinancialInstitutionResponseHandler"
import { Response } from "../global/classes/Response"

export class Controller {

    private response: Response
    private req: ExpressRequest

    constructor(req: ExpressRequest) {
        this.response = new Response('Bank Slip Registering - Financial Institution', req)
        this.req = req
    }
    public async register(res: ExpressResponse): Promise<ExpressResponse> {
        const bankSlipRegistering = new BankSlipRegistering(this.req)
        await bankSlipRegistering.handleAuthentication()
        const response: FinancialInstitutionResponseHandler = await bankSlipRegistering.register()
        this.setResponse(response)
        return res.status(response.statusCode).json(this.response)
    }
    private setResponse(response: FinancialInstitutionResponseHandler) {
        this.response.status = response.status!
        this.response.statusCode = response.statusCode!
        this.response.mainData = response.body!
    }
}
