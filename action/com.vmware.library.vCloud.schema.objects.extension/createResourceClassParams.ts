/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createResourceClassParams(descriptionArg?: string, mimeTypeArg?: string, nameArg?: string, nidArg?: string, operationKeyArg?: string, resourceClassActionsArg?: any, serviceResourcesArg?: any, urlTemplateArg?: string, urnPatternArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclResourceClassParams();
result["urnPattern"] = urnPatternArg;
result["serviceResources"] = serviceResourcesArg;
result["resourceClassActions"] = resourceClassActionsArg;
result["nid"] = nidArg;
result["urlTemplate"] = urlTemplateArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["mimeType"] = mimeTypeArg;
return result;
}
}
