/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createInstantiateOvfProperty(classIdArg?: string, instanceIdArg?: string, keyArg?: string, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclInstantiateOvfProperty();
result["classId"] = classIdArg;
result["instanceId"] = instanceIdArg;
result["value"] = valueArg;
result["key"] = keyArg;
return result;
}
}
