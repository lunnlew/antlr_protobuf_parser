import { PbStructure } from "./PbStructure";
import { Java2PBType, JavaFieldMap, PBType } from "./PBMap";
export class GeneProtoFile {
  private indent: number = 0;


  public constructor(private pbStructure: PbStructure) {

  }

  public indentWrite (string) {
    this.indentInc();
    this.write(string);
    this.indentDec();
  }

  public indentWriteLn (string) {
    this.indentInc();
    this.writeLn(string);
    this.indentDec();
  }

  public write (string) {
    let indent = this.indent;
    while (indent-- > 0) {
      this.put("    ");
    }
    this.put(string);
  }

  public writeLn (string) {
    this.write(string);
    this.put("\n");
  }

  public put (string) {
    process.stdout.write(string);
  }

  public indentInc () {
    ++this.indent;
  }

  public indentDec () {
    --this.indent;
    if (this.indent < 0) {
      this.indent = 0;
    }
  }


  public emitProto () {
    this.emitMessage();

  }

  private emitMessage () {
    this.writeLn(`message ${this.pbStructure.messageName} {`)
    this.indentInc();
    this.emitProtoBody();
    this.indentDec();
    this.write(`}`)
    this.writeLn(``)
  }

  private emitProtoBody () {
    this.pbStructure.flags.map((flag, index) => {
      this.emitProtoField(index);
    });
  }

  private emitProtoField (index) {
    let name = this.pbStructure.fields[index];
    let fieldData = this.pbStructure.fieldMap.get(name);
    if (!fieldData) {
      this.writeLn(`//TODO ${name};`);
      return
    }
    switch (fieldData.type) {
      case JavaFieldMap.PBBytesField:
        this.writeLn(`${PBType.bytes} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBDoubleField:
        this.writeLn(`${PBType.double} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBEnumField:
        this.writeLn(`enum ${fieldData.name};`);//fixme
        break;
      case JavaFieldMap.PBField:
        this.writeLn(`pb ${fieldData.name};`);//fixme
        break;
      case JavaFieldMap.PBFixed32Field:
        this.writeLn(`${PBType.fixed32} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBFixed64Field:
        this.writeLn(`${PBType.fixed64} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBFloatField:
        this.writeLn(`${PBType.float} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBInt32Field:
        this.writeLn(`${PBType.int32} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBInt64Field:
        this.writeLn(`${PBType.int64} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBPrimitiveField:
        this.writeLn(`primitive ${fieldData.name};`);//fixme
        break;
      case JavaFieldMap.PBRepeatField:
        this.writeLn(`repeated ${Java2PBType[fieldData.repeated]} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBRepeatMessageField:
        this.writeLn(`repeated message ${fieldData.type} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBSFixed32Field:
        this.writeLn(`${PBType.sfixed32} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBSFixed64Field:
        this.writeLn(`${PBType.sfixed64} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBSInt32Field:
        this.writeLn(`${PBType.sint32} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBSInt64Field:
        this.writeLn(`${PBType.sint64} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBStringField:
        this.writeLn(`${PBType.string} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBUInt32Field:
        this.writeLn(`${PBType.uint32} ${fieldData.name};`);
        break;
      case JavaFieldMap.PBUInt64Field:
        this.writeLn(`${PBType.uint64} ${fieldData.name};`);
        break;
      default:
        this.writeLn(`${fieldData.packageName}.${fieldData.type} ${fieldData.name};`);
        break;
    }
  }
}