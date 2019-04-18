/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createMetadataEntry(domainArg?: any, keyArg?: string, typedValueArg?: any, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclMetadataEntry();
var value = new VclAbstractValueObject();
value.setValue(typedValueArg);
result["typedValue"] = value;
result["value"] = valueArg;
result["key"] = keyArg;
result["domain"] = domainArg;
return result;
}
}
