/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVmAffinityRule(isEnabledArg?: boolean, isMandatoryArg?: boolean, nameArg?: string, operationKeyArg?: string, polarityArg?: string, scopeArg?: string, vmReferencesArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVmAffinityRule();
result["scope"] = scopeArg;
result["isEnabled"] = isEnabledArg;
result["operationKey"] = operationKeyArg;
result["vmReferences"] = vmReferencesArg;
result["isMandatory"] = isMandatoryArg;
result["polarity"] = polarityArg;
result["name"] = nameArg;
return result;
}
}
