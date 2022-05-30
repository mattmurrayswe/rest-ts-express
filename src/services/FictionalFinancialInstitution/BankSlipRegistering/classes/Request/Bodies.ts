export class Bodies {

    public body: Body
    public stringifyiedBody: string

    constructor(reqBody: any) {
        this.body = this.generateBody(reqBody)
        this.stringifyiedBody = this.stringify()
    }

    private generateBody(reqBody: any) {
        return new Body(reqBody)
    }

    private stringify() {
        return JSON.stringify(this.body)
    }
}
import { Body } from "./Body"
