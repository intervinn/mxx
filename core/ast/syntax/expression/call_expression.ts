import { ASTNode } from "@core/ast/node";
import { IExpression } from ".";
import { SyntaxKind } from "@core/enum";

export class CallExpression extends ASTNode implements IExpression {
    constructor(
        pos: number,
        end: number,
        public args: ASTNode[]
    ) {
        super(pos, end, SyntaxKind.CallExpression)
    }
}