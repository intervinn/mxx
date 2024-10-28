import { SyntaxKind } from "@core/enum";
import { ASTNode } from "@core/ast";
import { ILiteral } from ".";

export class IntLiteral extends ASTNode implements ILiteral {
    constructor(
        public text: string,
        pos: number,
        end: number,
    ) {
        super(pos, end, SyntaxKind.IntLiteral)
    }
}
