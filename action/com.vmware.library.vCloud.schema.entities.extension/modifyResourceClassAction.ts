/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyResourceClassAction(targetEntityArg?: vCloud.AdminResourceClassAction, aclRulesArg?: any, descriptionArg?: string, httpMethodArg?: string, nameArg?: string, operationKeyArg?: string, urlPatternArg?: string): vCloud.AdminResourceClassAction {// WARNING: Auto generated code. Please, do not edit this code.
if (urlPatternArg != null) {
	targetEntityArg["urlPattern"] = urlPatternArg;
}
if (httpMethodArg != null) {
	targetEntityArg["httpMethod"] = httpMethodArg;
}
if (aclRulesArg != null) {
	targetEntityArg["aclRules"] = aclRulesArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
return targetEntityArg;
}
}
