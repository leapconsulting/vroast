/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyAdminServiceLink(targetEntityArg?: vCloud.AdminServiceLink, linkHrefArg?: string, mimeTypeArg?: string, operationKeyArg?: string, relArg?: string, resourceIdArg?: string, resourceTypeArg?: string): vCloud.AdminServiceLink {// WARNING: Auto generated code. Please, do not edit this code.
if (resourceIdArg != null) {
	targetEntityArg["resourceId"] = resourceIdArg;
}
if (relArg != null) {
	targetEntityArg["rel"] = relArg;
}
if (resourceTypeArg != null) {
	targetEntityArg["resourceType"] = resourceTypeArg;
}
if (linkHrefArg != null) {
	targetEntityArg["linkHref"] = linkHrefArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (mimeTypeArg != null) {
	targetEntityArg["mimeType"] = mimeTypeArg;
}
return targetEntityArg;
}
}
