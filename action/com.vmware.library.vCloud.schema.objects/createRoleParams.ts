/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createRoleParams(descriptionArg?: string, nameArg?: string, operationKeyArg?: string, rightReferencesArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRoleParams();
result["rightReferences"] = rightReferencesArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
