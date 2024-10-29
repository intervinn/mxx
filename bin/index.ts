import { ASTParser } from "@core/ast";
import { ReadStream } from "@core/ast/stream";

const parser = new ASTParser(
    new ReadStream("-  - +   +/")
)

const tree = parser.parse()