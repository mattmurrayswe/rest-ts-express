export class Payload {

    public aud: string
    public sub: string
    public iat: number
    public exp: number
    public jti: number
    public ver: string
    private actualDate: number

    constructor() {
        this.actualDate = this.generateActualDateInSeconds()
        this.aud = this.generateTokenGenerationEndpoint(),
        this.sub = this.generateClientId(),
        this.iat = this.actualDate,
        this.exp = this.generateActualDateInSecondsPlusOneMonth(),
        this.jti = this.generateNumericRandom(),
        this.ver = this.generateVersion()
    }

    private generateTokenGenerationEndpoint(): string {
        return 'https://example.com/auth/server/v1.1/token'
    }

    private generateClientId(): string {
        return 'exampleexample-example-example-example-exampleexample'
    }

    private generateActualDateInSeconds(): number {
        return Math.trunc(Date.now() / 1000)
    }

    private generateActualDateInSecondsPlusOneMonth(): number {
        return this.actualDate + (30 * 24 * 60 * 60)
    }

    private generateNumericRandom(): number {
        return this.actualDate
    }

    private generateVersion(): string {
        return '1.1'
    }
}