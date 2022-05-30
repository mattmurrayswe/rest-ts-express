import { ValidationResult, ValidationError } from "joi"

export class ValidationHandler {

    private joiResponse: ValidationResult
    public status: string
    public statusCode: undefined | number
    public data: undefined | ValidationError

    constructor(joiResponse: ValidationResult) {
        this.joiResponse = joiResponse
        this.status = this.generateStatus()
        this.statusCode = this.generateStatusCode()
        this.data = this.generateData()
    }
    private generateStatus(): string {
        if (typeof this.joiResponse.error != 'undefined') {
            return 'Error'
        } else {
            return 'Success'
        }
    }
    private generateStatusCode(): number | undefined {
        if (this.status == 'Error') {
            return 400
        }
    }
    private generateData(): ValidationError | undefined {
        if (this.status == 'Error') {
            return this.joiResponse.error
        }
    }
}