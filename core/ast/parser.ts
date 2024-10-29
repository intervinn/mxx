import { ASTFactory } from "./factory";
import { ReadStream } from "./stream";

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

    
}