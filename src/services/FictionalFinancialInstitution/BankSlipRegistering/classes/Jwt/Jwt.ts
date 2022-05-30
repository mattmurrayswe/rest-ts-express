import * as fs from 'fs'
import * as child from 'child_process'
import { Payload } from './Payload'
import { Header } from './Header'

export class Jwt {

    public jwt: string
    private header: Header
    private payload: Payload
    private stringifyiedHeader: string
    private stringifyiedPayload: string
    private encodedHeader: string
    private encodedPayload: string
    private encodedHeaderPlusPayload: string
    private signature: string

    constructor() {
        this.header = this.generateHeader()
        this.payload = this.generatePayload()
        this.stringifyiedHeader = this.generateStringifyiedHeader()
        this.stringifyiedPayload = this.generateStringifyiedPayload()
        this.encodedHeader = this.generateEncodedStringifyiedHeader()
        this.encodedPayload = this.generateEncodedStringifyiedPayload()
        this.encodedHeaderPlusPayload = this.generateEncodedHeaderPlusPayload()
        this.createTxtFileWithEncodedHeaderPlusPayload()
        this.signature = this.executeSh()
        this.jwt = this.generateJwt()
    }

    private generateHeader(): Header {
        return new Header()
    }

    private generatePayload(): Payload {
        return new Payload()
    }

    private stringify(json: object): string {
        return JSON.stringify(json)
    }

    private generateStringifyiedHeader(): string {
        return this.stringify(this.header).replace(/\\/, '')
    }

    private generateStringifyiedPayload(): string {
        return this.stringify(this.payload).replace(/\\/, '')
    }

    private generateEncodedStringifyiedHeader(): string {
        return Buffer.from(this.stringifyiedHeader).toString('base64')
    }

    private generateEncodedStringifyiedPayload(): string {
        return Buffer.from(this.stringifyiedPayload).toString('base64')
    }

    private generateEncodedHeaderPlusPayload(): string {
        return this.encodedHeader + '.' + this.encodedPayload
    }

    private createTxtFileWithEncodedHeaderPlusPayload(): void {
        fs.writeFileSync('/tmp/encodedHeaderPlusPayload.txt', this.encodedHeaderPlusPayload)
    }

    private executeSh(): string {
        return child.execFileSync('sh', ['./app/src/services/FictionalFinancialInstitution/BankSlipRegistering/classes/Jwt/jwt.sh']).toString()
    }

    private generateJwt(): string {
        return this.encodedHeaderPlusPayload + '.' + this.signature
    }
}
