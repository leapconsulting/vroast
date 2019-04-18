/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVCloud(descriptionArg?: string, nameArg?: string, networksArg?: any, operationKeyArg?: string, organizationReferencesArg?: any, providerVdcReferencesArg?: any, rightReferencesArg?: any, roleReferencesArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVCloud();
result["networks"] = networksArg;
result["rightReferences"] = rightReferencesArg;
result["roleReferences"] = roleReferencesArg;
result["operationKey"] = operationKeyArg;
result["organizationReferences"] = organizationReferencesArg;
result["providerVdcReferences"] = providerVdcReferencesArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
