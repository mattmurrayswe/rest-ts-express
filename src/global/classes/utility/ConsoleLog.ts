export class ConsoleLog {

    private data: any
    private description: string
    private dataColor: string
    private descriptionColor: string

    /**
     * Prints, colours, and create separators for your multiple console.log()
     * @param data The data that you want to consolelog(). Ex.: consolelog(data)
     * @param description A description for the data that you are console.logging(). It will generate a separator for your console.logs(), Ex: NAMES will produce: =========NAMES=========
     * @param dataColor Unix color syntax. Ex: pink = '\x1b[33m%s\x1b[0m'
     * @param descriptionColor Unix color syntax. Ex: orange = '\x1b[1;35m%s\x1b[0m'
     */
    constructor(data: any, description = '', dataColor = new Colors().pink, descriptionColor = new Colors().orange) {
        this.data = data
        this.description = this.generateDescription(description)
        this.dataColor = dataColor
        this.descriptionColor = descriptionColor
        this.consoleLogBlankLine()
        this.consoleLogDescription()
        this.consoleLogData()
    }

    private generateDescription(description: string): string {
        return description == '' ? this.data : description 
    }

    private consoleLogBlankLine(): void {
        console.log(`\n`)
    }

    private consoleLogDescription(): void {
        console.log(this.descriptionColor, `================${this.description}================`)
    }

    private consoleLogData(): void {
        console.log(this.dataColor, this.data)
    }
}

class Colors {

    public pink = '\x1b[33m%s\x1b[0m'
    public orange = '\x1b[1;35m%s\x1b[0m'
}