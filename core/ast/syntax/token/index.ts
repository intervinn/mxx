import { ASTNode } from "@core/ast/node";
import { SyntaxKind } from "@core/enum";

export interface IToken {
    text: string
}

export abstract class Token extends ASTNode implements IToken {
    constructor(
        pos: number,
        end: number,
        kind: SyntaxKind,
        public text: string,
    ) {
        super(pos, end, kind)
    }
}

export function createSimpleToken(kind: SyntaxKind) {
    return class extends Token {
        constructor(
            pos: number,
            end: number,
            text: string
        ) {
            super(pos, end, kind, text)
        }
    }
}

export const PlusToken = createSimpleToken(SyntaxKind.PlusToken)
export const AsteriskToken = createSimpleToken(SyntaxKind.AsteriskToken)
export const SlashToken = createSimpleToken(SyntaxKind.SlashToken)
export const MinusToken = createSimpleToken(SyntaxKind.MinusToken)