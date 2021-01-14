
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import fs from 'fs-extra'
import { Java8Lexer } from './grammars-ts/grammars-v4/java/java8/Java8Lexer'
import { Java8Parser } from './grammars-ts/grammars-v4/java/java8/Java8Parser'

import { PbMaps } from "./PbStructure";
import { GeneProtoFile } from "./GeneProtoFile";
import { CustomClassBodyDeclarationVisitor } from "./CustomClassBodyDeclarationVisitor";

const input = fs.readFileSync('./src/MessageMicro.java', 'utf-8')
let chars = CharStreams.fromString(input);
let lexer = new Java8Lexer(chars);
let tokens = new CommonTokenStream(lexer);
let parser = new Java8Parser(tokens);
let tree = parser.compilationUnit();

let pbMaps = new PbMaps();
let javaVisitor = new CustomClassBodyDeclarationVisitor(pbMaps);
javaVisitor.visit(tree);

let maps = pbMaps.getMaps()
for (var className of maps.keys()) {
  let gene = new GeneProtoFile(maps.get(className));
  gene.emitProto();
}
