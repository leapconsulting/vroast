/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGatewayParams(configurationArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, statusArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGatewayParams();
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["configuration"] = configurationArg;
return result;
}
}
