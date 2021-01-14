import { Java8ParserVisitor } from './grammars-ts/grammars-v4/java/java8/Java8ParserVisitor'
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import {
  ClassDeclarationContext,
  FieldDeclarationContext,
  VariableDeclaratorContext,
  VariableInitializerContext,
  PackageNameContext
} from './grammars-ts/grammars-v4/java/java8/Java8Parser'
import { PbMaps } from "./PbStructure";
export class CustomClassBodyDeclarationVisitor<Result> extends AbstractParseTreeVisitor<Result> implements Java8ParserVisitor<Result> {

  private currentHandleField;
  private currentClassName;
  private packageName;

  public constructor(public pbMaps: PbMaps) {
    super();
  }

  private resetCurrentHandleField () {
    this.currentHandleField = {
      type: null,
      name: null,
      defaultValue: null,
      repeated: null,
      packageName: null
    };
  }

  public visitPackageName (ctx: PackageNameContext): Result {
    this.packageName = ctx.text
    return;
  }

  public visitClassDeclaration (ctx: ClassDeclarationContext): Result {
    // console.log(`Class start line number ${ctx._start.line}`)
    // console.log(`Class stop line number ${ctx._stop.line}`)
    let className = ctx.normalClassDeclaration().Identifier().text
    console.log('current class', className)
    this.currentClassName = className
    this.pbMaps.setPbStructureMessageName(this.currentClassName, className)
    super.visitChildren(ctx)
    return;
  }
  public visitFieldDeclaration (ctx: FieldDeclarationContext): Result {
    // 字段类型
    let type = ctx.unannType().text
    let isown = false
    switch (type) {
      case 'MessageMicro.a': {
        this.visit(ctx.variableDeclaratorList());
        break;
      }
      case 'g5<com.tencent.qqmini.proguard.a>':
      case 'C0011a':
      case 'b':
        isown = true
      case 'l5':
      case 'v4':
      case 'm5':
      case 'd5':
      case 'n5':
        this.resetCurrentHandleField();
        this.currentHandleField.type = type;
        if (isown) {
          this.currentHandleField.packageName = this.packageName;
        }
        this.visit(ctx.variableDeclaratorList());
        this.pbMaps.setPbStructureFieldMap(this.currentClassName, this.currentHandleField.name, this.currentHandleField);
        this.resetCurrentHandleField();
        break
    }
    return;
  }

  public visitVariableDeclarator (ctx: VariableDeclaratorContext): Result {
    if (ctx.variableDeclaratorId().text == '__fieldMap__') {
      if (ctx.variableInitializer()) {
        this.visitFieldMapVariableInitializer(ctx.variableInitializer());
      }
    } else {
      if (ctx.variableInitializer()) {
        this.currentHandleField.name = ctx.variableDeclaratorId().text;
        this.visitPBFieldVariableInitializer(ctx.variableInitializer());
      }
    }
    return;
  }

  private visitFieldMapVariableInitializer (ctx: VariableInitializerContext) {
    let initFunc = ctx.expression().text;
    // 手动处理
    let m = initFunc.match(/\{(.*?)\}/g)
    this.pbMaps.setPbStructureFlags(this.currentClassName, m[0].replace(/[{"}]/g, '').split(','));
    this.pbMaps.setPbStructureFields(this.currentClassName, m[1].replace(/[{"}]/g, '').split(','));
    this.pbMaps.setPbStructureDefaultValues(this.currentClassName, []);
  }

  // private visitFieldMapExpressList (ctx: ExpressionListContext) {
  //   this.pbStructure.flags = this.visit(ctx.expression(0));
  //   this.pbStructure.fields = this.visit(ctx.expression(1));
  //   this.pbStructure.defaultValues = this.visit(ctx.expression(2));
  // }

  public visitPBFieldVariableInitializer (ctx: VariableInitializerContext) {
    let expr = ctx.expression();
    // switch (expr.expression(0).text) {
    //   case 'PBField.initBool':
    //     this.currentHandleField.defaultValue = expr.expressionList().text;
    //     this.currentHandleField.repeated = true
    //     break;
    // }
  }

  protected defaultResult (): Result {
    return;
  }
}
