export class FinancialInstitutionResponseHandler {

    private financialInstitutionResponse: any
    public status: string
    public statusCode: number
    public body: object

    constructor(response: any) {
        this.financialInstitutionResponse = response
        this.status = this.generateStatus()
        this.statusCode = this.generateStatusCode()
        this.body = this.generateBody()
    }
    private generateStatus(): string {
        if (typeof this.financialInstitutionResponse.error != 'undefined') {
            return 'Error'
        } else {
            return 'Success'
        }
    }
    private generateStatusCode(): number {
        if (this.status == 'Error') {
            return this.financialInstitutionResponse.error.response.status
        } else {
            return this.financialInstitutionResponse.data.status
        }
    }
    private generateBody(): object {
        if (this.status == 'Error') {
            return this.financialInstitutionResponse.error.response.data
        } else {
            return this.financialInstitutionResponse.data.data
        }
    }
}
