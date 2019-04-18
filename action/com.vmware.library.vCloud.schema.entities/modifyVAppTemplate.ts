/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, dateCreatedArg?: any, defaultStorageProfileArg?: string, descriptionArg?: string, goldMasterArg?: boolean, nameArg?: string, operationKeyArg?: string, ovfDescriptorUploadedArg?: boolean, ownerArg?: any, vAppScopedLocalIdArg?: string): vCloud.VAppTemplate {// WARNING: Auto generated code. Please, do not edit this code.
if (ownerArg != null) {
	targetEntityArg["owner"] = ownerArg;
}
if (vAppScopedLocalIdArg != null) {
	targetEntityArg["vAppScopedLocalId"] = vAppScopedLocalIdArg;
}
if (goldMasterArg != null) {
	targetEntityArg["goldMaster"] = goldMasterArg;
}
if (ovfDescriptorUploadedArg != null) {
	targetEntityArg["ovfDescriptorUploaded"] = ovfDescriptorUploadedArg;
}
if (defaultStorageProfileArg != null) {
	targetEntityArg["defaultStorageProfile"] = defaultStorageProfileArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (dateCreatedArg != null) {
	targetEntityArg["dateCreated"] = dateCreatedArg;
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
