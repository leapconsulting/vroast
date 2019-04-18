/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createResourceClassActionParams(aclRulesArg?: any, descriptionArg?: string, httpMethodArg?: string, nameArg?: string, operationKeyArg?: string, urlPatternArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclResourceClassActionParams();
result["urlPattern"] = urlPatternArg;
result["httpMethod"] = httpMethodArg;
result["aclRules"] = aclRulesArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
