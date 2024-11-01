import { ASTNode } from "./node";
import { ReadStream } from "./stream";
import { BinaryExpression, CallExpression } from "./syntax/expression";
import { Identifier } from "./syntax/identifier";
import { IntLiteral, StringLiteral } from "./syntax/literal";
import { AsteriskToken, MinusToken, PlusToken, SlashToken, Token } from "./syntax/token";

export class ASTFactory {
    constructor(
        public stream: ReadStream
    ) {}


    public createIdentifier(pos: number, end: number, ident: string) {
        return new Identifier(pos, end, ident)
    }

    public createCallExpression(pos: number, end: number, args: ASTNode[]) {
        return new CallExpression(pos, end, args)
    }

    public createBinaryExpression(pos: number, end: number, left: IntLiteral, operator: Token, right: IntLiteral) {
        return new BinaryExpression(pos, end, left, operator, right)
    }

    public createIntLiteral(text: string, pos: number, end: number) {
        return new IntLiteral(text, pos, end)
    }

    public createStringLiteral(text: string, pos: number, end: number) {
        return new StringLiteral(text, pos, end)
    }

    public createToken(text: string, pos: number, end: number) {
        switch (text) {
            case "*":
                return new AsteriskToken(pos, end, text)
            case "+":
                return new PlusToken(pos, end, text)
            case "-":
                return new MinusToken(pos, end, text)
            case "/":
                return new SlashToken(pos, end, text)
            default:
                throw new Error("unknown token")
        }
    }
}