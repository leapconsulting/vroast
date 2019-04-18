/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyResourceClass(targetEntityArg?: vCloud.AdminResourceClass, descriptionArg?: string, mimeTypeArg?: string, nameArg?: string, nidArg?: string, operationKeyArg?: string, resourceClassActionsArg?: any, serviceResourcesArg?: any, urlTemplateArg?: string, urnPatternArg?: string): vCloud.AdminResourceClass {// WARNING: Auto generated code. Please, do not edit this code.
if (urnPatternArg != null) {
	targetEntityArg["urnPattern"] = urnPatternArg;
}
if (serviceResourcesArg != null) {
	targetEntityArg["serviceResources"] = serviceResourcesArg;
}
if (resourceClassActionsArg != null) {
	targetEntityArg["resourceClassActions"] = resourceClassActionsArg;
}
if (nidArg != null) {
	targetEntityArg["nid"] = nidArg;
}
if (urlTemplateArg != null) {
	targetEntityArg["urlTemplate"] = urlTemplateArg;
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
if (mimeTypeArg != null) {
	targetEntityArg["mimeType"] = mimeTypeArg;
}
return targetEntityArg;
}
}
