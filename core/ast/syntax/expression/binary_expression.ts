import { ASTNode } from "@core/ast/node";
import { IExpression } from ".";
import { IntLiteral } from "../literal";
import { SyntaxKind } from "@core/enum";
import { Token } from "@core/ast/syntax/token";

export class BinaryExpression extends ASTNode implements IExpression {
    constructor(
        pos: number,
        end: number,
        public left: IntLiteral,
        public operator: Token,
        public right: IntLiteral,
    ) {
        super(pos, end, SyntaxKind.BinaryExpression)
    }
}