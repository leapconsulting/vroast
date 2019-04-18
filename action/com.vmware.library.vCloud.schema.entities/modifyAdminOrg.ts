/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyAdminOrg(targetEntityArg?: vCloud.AdminOrganization, catalogsArg?: any, descriptionArg?: string, fullNameArg?: string, isEnabledArg?: boolean, nameArg?: string, networksArg?: any, operationKeyArg?: string, settingsArg?: any, vdcsArg?: any): vCloud.AdminOrganization {// WARNING: Auto generated code. Please, do not edit this code.
if (fullNameArg != null) {
	targetEntityArg["fullName"] = fullNameArg;
}
if (settingsArg != null) {
	targetEntityArg["settings"] = settingsArg;
}
if (catalogsArg != null) {
	targetEntityArg["catalogs"] = catalogsArg;
}
if (networksArg != null) {
	targetEntityArg["networks"] = networksArg;
}
if (vdcsArg != null) {
	targetEntityArg["vdcs"] = vdcsArg;
}
if (isEnabledArg != null) {
	targetEntityArg["isEnabled"] = isEnabledArg;
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
