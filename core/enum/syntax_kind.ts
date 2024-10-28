
export enum SyntaxKind {
    Identifier,

	IntLiteral,
	StringLiteral,

	OpenBraceToken,
	CloseBraceToken,
	SemicolonToken,
	CommaToken,
	LessThanToken,
	GreaterThanToken,
	LessThanEqualsToken,
	GreaterThanEqualsToken,
	EqualsToken,
	EqualsEqualsToken,
	MinusToken,
	PlusToken,
	AsteriskToken,
	AsteriskAsteriskToken,
	SlashToken,
	PlusPlusToken,
	MinusMinusToken,
	AmpersandToken,
	BarToken,

	LetKeyword,
	EndKeyword,
	IfKeyword,
	ElseKeyword,
	FalseKeyword,
	TrueKeyword,
	ReturnKeyword,

	BinaryExpression,
	CallExpression,

	ExpressionStatement
}