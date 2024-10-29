import { ASTFactory } from "./factory";
import { ReadStream } from "./stream";
import { Token } from "./syntax/token";

/**
 * @name ASTParser
 * @description Primary parser class
 */
export class ASTParser {
    protected factory: ASTFactory

    /** 
     * @param stream Contents to parse
     */
    constructor(
        protected stream: ReadStream
    ) {
        this.factory = new ASTFactory(stream)
    }

    public parse() {
        let pos = 0
        let buf = ""
        let res

        
        const isEnd = () => {
            return this.stream.size()-1 == pos
        }
        const next = () => {
            return this.stream.read()[pos+1]
        }
        const clear = () => {
            buf = ""
        }

        for (pos = 0; pos < this.stream.size(); pos++) {
            let char = this.stream.read().charAt(pos)
            buf += char

            res = this.parseToken(pos, pos - buf.length)
            if (res) {
                
            }
        }
    }

    public parseToken(pos: number, end: number): Token | null {
        try {
            return this.factory.createToken(this.stream.read().substring(pos, end).trim(), pos, end)
        } catch(e) {
            console.log("unknown token")
            return null
        }
    }
}