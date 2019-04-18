/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCustomizationSection(customizeOnInstantiateArg?: boolean, goldMasterArg?: boolean, infoArg?: any, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCustomizationSection();
result["info"] = infoArg;
result["goldMaster"] = goldMasterArg;
result["customizeOnInstantiate"] = customizeOnInstantiateArg;
result["required"] = requiredArg;
return result;
}
}
