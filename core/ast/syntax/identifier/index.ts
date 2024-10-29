import { ASTNode } from "@core/ast/node";
import { SyntaxKind } from "@core/enum";

export class Identifier extends ASTNode {
    constructor(
        pos: number,
        end: number,
        public text: string
    ) {
        super(pos, end, SyntaxKind.Identifier)
    }
}