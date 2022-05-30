import { Jwt } from "./classes/Jwt/Jwt"
import { AxiosRequestConfig } from "axios"
import { ConfigAccessToken } from "./classes/AccessToken/ConfigAccessToken"
import { FacadeAxios } from "../../../global/classes/FacadeAxios"
import { AccessTokenResponseHandler } from "./classes/AccessToken/AccessTokenResponseHandler"
import { Bodies } from "./classes/Request/Bodies"
import { Body } from "./classes/Request/Body"
import { XSignature } from "./classes/Request/XSignature"
import { ConfigRegister } from "./classes/Request/ConfigRegister"
import { FinancialInstitutionResponseHandler } from "./classes/Request/FinancialInstitutionResponseHandler"

export class BankSlipRegistering {

    private reqBody: any
    private jwt!: string
    private configAccessToken!: AxiosRequestConfig
    private accessToken!: string
    private body!: Body
    private stringifyiedBody!: string
    private xSignature!: any
    private configRegistro!: AxiosRequestConfig

    constructor(req: any) {
        this.reqBody = req.body
    }
    public async handleAuthentication(): Promise<void> {
        this.setJwt()
        this.setConfigAccessToken()
        const responseA: Promise<any> = await this.requestFinancialInstitutionForAccessToken()
        this.setAccessToken(responseA)
        this.setBodies()
        this.setXSignature(this.accessToken, this.stringifyiedBody)
    }
    public async register(): Promise<FinancialInstitutionResponseHandler> {
        this.setConfigRegistro(this.accessToken, this.xSignature, this.body)
        const responseB: Promise<any> = await this.requestFinancialInstitutionForRegistro(this.configRegistro)
        const rHandled = this.handleFinancialInstitutionRegistroResponse(responseB)
        return rHandled
    }
    private setJwt(): void {
        this.jwt = new Jwt().jwt
    }
    private setConfigAccessToken(): void {
        this.configAccessToken = new ConfigAccessToken(this.jwt).config
    }
    private setBodies(): void {
        const bodies = new Bodies(this.reqBody)
        this.body = bodies.body
        this.stringifyiedBody = bodies.stringifyiedBody
    }
    private async requestFinancialInstitutionForAccessToken(): Promise<any> {
        return await new FacadeAxios(this.configAccessToken).request()
    }
    private setAccessToken(response: any): void {
        this.accessToken = new AccessTokenResponseHandler(response).accessToken
    }
    private setXSignature(accessToken: string, stringifyiedBody: string): void {
        this.xSignature = new XSignature(accessToken, stringifyiedBody).xSignature
    }
    private setConfigRegistro(accessToken: string, xSignature: string, body: Body): void {
        this.configRegistro = new ConfigRegister(accessToken, xSignature, body).config
    }
    private async requestFinancialInstitutionForRegistro(config: AxiosRequestConfig): Promise<any> {
        return await new FacadeAxios(config).request()
    }
    private handleFinancialInstitutionRegistroResponse(response: any): FinancialInstitutionResponseHandler {
        return new FinancialInstitutionResponseHandler(response)
    }
}