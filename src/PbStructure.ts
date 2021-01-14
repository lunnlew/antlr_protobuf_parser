export class PbStructure {
  public messageName;

  //another info
  public extend;

  public flags;
  public fields;
  public defaultValues;
  fieldMap: Map<string, { type, name, defaultValue, repeated, packageName }>;

  constructor() {
    this.fieldMap = new Map();
    this.flags = new Array();
    this.fields = new Array();
  }
}

export class PbMaps {
  public pbStructureMap: Map<String, PbStructure>;
  public pbStructure: PbStructure;
  public setPbStructureMessageName (name, value) {
    let pbStructure = new PbStructure()
    if (this.pbStructureMap.has(name)) {
      pbStructure = this.pbStructureMap.get(name)
    } else {
      pbStructure = new PbStructure()
      pbStructure.messageName = value
    }
    this.pbStructureMap.set(name, pbStructure)
  }
  public setPbStructureExtend (name, value) {
    let pbStructure = new PbStructure()
    if (this.pbStructureMap.has(name)) {
      pbStructure = this.pbStructureMap.get(name)
    } else {
      pbStructure = new PbStructure()
      pbStructure.messageName = value
    }
    pbStructure.extend = value
    this.pbStructureMap.set(name, pbStructure)
  }
  public setPbStructureFlags (name, value) {
    let pbStructure = new PbStructure()
    if (this.pbStructureMap.has(name)) {
      pbStructure = this.pbStructureMap.get(name)
    } else {
      pbStructure = new PbStructure()
      pbStructure.messageName = value
    }
    pbStructure.flags = value
    this.pbStructureMap.set(name, pbStructure)
  }
  public setPbStructureFields (name, value) {
    let pbStructure = new PbStructure()
    if (this.pbStructureMap.has(name)) {
      pbStructure = this.pbStructureMap.get(name)
    } else {
      pbStructure = new PbStructure()
      pbStructure.messageName = value
    }
    pbStructure.fields = value
    this.pbStructureMap.set(name, pbStructure)
  }
  public setPbStructureDefaultValues (name, value) {
    let pbStructure = new PbStructure()
    if (this.pbStructureMap.has(name)) {
      pbStructure = this.pbStructureMap.get(name)
    } else {
      pbStructure = new PbStructure()
      pbStructure.messageName = value
    }
    pbStructure.defaultValues = value
    this.pbStructureMap.set(name, pbStructure)
  }
  public setPbStructureFieldMap (name, key, value) {
    let pbStructure = new PbStructure()
    if (this.pbStructureMap.has(name)) {
      pbStructure = this.pbStructureMap.get(name)
    } else {
      pbStructure = new PbStructure()
      pbStructure.messageName = value
    }
    pbStructure.fieldMap.set(key, value)
    this.pbStructureMap.set(name, pbStructure)
  }
  constructor() {
    this.pbStructureMap = new Map<String, PbStructure>()
  }

  public getMaps (): Map<String, PbStructure> {
    return this.pbStructureMap
  }
}