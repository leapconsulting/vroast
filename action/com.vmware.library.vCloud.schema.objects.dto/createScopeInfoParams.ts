/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.dto {
export function createScopeInfoParams(nameArg?: string, objectTypeNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclScopeInfoParams();
result["name"] = nameArg;
result["objectTypeName"] = objectTypeNameArg;
return result;
}
}
