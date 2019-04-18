/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createServiceData(descriptionArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, vendorArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclServiceData();
result["vendor"] = vendorArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["namespace"] = namespaceArg;
return result;
}
}
