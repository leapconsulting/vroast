/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyApiFilter(targetEntityArg?: vCloud.AdminApiFilter, operationKeyArg?: string, responseContentTypeArg?: string, urlPatternArg?: string): vCloud.AdminApiFilter {// WARNING: Auto generated code. Please, do not edit this code.
if (urlPatternArg != null) {
	targetEntityArg["urlPattern"] = urlPatternArg;
}
if (responseContentTypeArg != null) {
	targetEntityArg["responseContentType"] = responseContentTypeArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
return targetEntityArg;
}
}
