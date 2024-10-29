
export class ReadStream {
    constructor(
        protected content: string
    ) {}

    public at(pos: number, end: number): string {
        return this.content.substring(pos, end)
    }

    public read() {
        return this.content
    }

    public size() {
        return this.content.length
    }
}