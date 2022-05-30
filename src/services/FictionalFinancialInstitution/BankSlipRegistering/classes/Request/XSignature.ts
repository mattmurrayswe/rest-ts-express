import * as fs from 'fs'
import * as child from 'child_process'
export class XSignature {

    private method: string
    private uri: string
    private params: string
    private body: string
    private accessToken: string
    private nonce: string
    private timeStamp: string
    private algorithm: string
    public requestTxt: string
    public signature: string
    public xSignature: string

    constructor(accessToken: string, body: string) {
        this.method = 'POST'
        this.uri = '/v1/boleto/registrarBoleto'
        this.params = ''
        this.body = body
        this.accessToken = accessToken
        this.nonce = '1574693951000'
        this.timeStamp = '2022-05-20T10:19:00-00:00'
        this.algorithm = 'SHA256'
        this.requestTxt = this.generateRequestTxt()
        this.createFileWithRequestTxt()
        this.signature = this.executeSh()
        this.xSignature = this.replaceWhiteSpaces(this.signature)
    }

    private generateRequestTxt(): string {
        const requestTxt = this.concat([
            this.method,
            this.uri,
            this.params,
            this.body,
            this.accessToken,
            this.nonce,
            this.timeStamp,
            this.algorithm
        ])
        return this.removeEndLineBreak(requestTxt)
    }

    private concat(add: Array<string>): string {
        let concated = ''
        for (let a of add) {
            concated = concated + a + this.generateUnixLineBreak()
        }
        return concated
    }

    private removeEndLineBreak(string: string): string {
        return string.trimEnd()
    }

    private createFileWithRequestTxt(): void {
        fs.writeFileSync('/tmp/request.txt', this.requestTxt)
    }

    private generateUnixLineBreak(): string {
        return '\n'
    }

    private executeSh(): string {
        return child.execFileSync('sh', ['./app/src/services/FictionalFinancialInstitution/BankSlipRegistering/classes/Request/request.sh']).toString()
    }

    private replaceWhiteSpaces(string: string) {
        for (let i = 0; i < 7; i++) {
            string = string.replace('\n', '')
        }
        return string
    }
}
