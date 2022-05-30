export class Header {

    public alg: string
    public typ: string

    constructor() {
        this.alg = 'RS256'
        this.typ = 'JWT'
    }
}