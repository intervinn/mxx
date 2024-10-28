import {ASTNode} from "@core/ast"
import { SyntaxKind } from "@core/enum"
import { ILiteral } from "."

export class StringLiteral extends ASTNode implements ILiteral {
    constructor(
        public text: string,
        pos: number,
        end: number
    ) {
        super(pos, end, SyntaxKind.StringLiteral)
    }
}