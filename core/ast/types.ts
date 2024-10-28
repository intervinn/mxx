import { SyntaxKind } from "@core/enum";

export type LiteralSyntaxKind = 
    SyntaxKind.IntLiteral
    | SyntaxKind.StringLiteral

export type PunctuationSyntaxKind =
    SyntaxKind.BarToken
    | SyntaxKind.PlusToken
    | SyntaxKind.CommaToken
    | SyntaxKind.MinusToken
    | SyntaxKind.SlashToken
    | SyntaxKind.EqualsToken
    | SyntaxKind.LessThanToken
    | SyntaxKind.AsteriskToken
    | SyntaxKind.PlusPlusToken
    | SyntaxKind.OpenBraceToken
    | SyntaxKind.AmpersandToken
    | SyntaxKind.SemicolonToken
    | SyntaxKind.CloseBraceToken
    | SyntaxKind.MinusMinusToken
    | SyntaxKind.GreaterThanToken
    
