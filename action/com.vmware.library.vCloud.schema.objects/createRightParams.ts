/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createRightParams(bundleKeyArg?: string, categoryArg?: string, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, serviceNamespaceArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRightParams();
result["category"] = categoryArg;
result["bundleKey"] = bundleKeyArg;
result["serviceNamespace"] = serviceNamespaceArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
