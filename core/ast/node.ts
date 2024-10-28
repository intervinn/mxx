import { SyntaxKind } from "@core/enum";


export interface IASTNode {
    pos: number
    end: number
    kind: SyntaxKind
}

/**
 * @name ASTNode
 * @description Abstract Syntax Tree Node
 */
export abstract class ASTNode implements IASTNode {
    /**
     * 
     * @param pos Capture begin position in stream
     * @param end Capture finish position in stream
     * @param kind Syntax kind
     * @param children Possible children
     */
    constructor(
        public pos: number,
        public end: number,
        public kind: SyntaxKind,
    ) {}
}