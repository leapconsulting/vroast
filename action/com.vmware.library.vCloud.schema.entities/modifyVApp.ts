/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyVApp(targetEntityArg?: vCloud.VApp, dateCreatedArg?: any, deployedArg?: boolean, descriptionArg?: string, inMaintenanceModeArg?: boolean, nameArg?: string, operationKeyArg?: string, ovfDescriptorUploadedArg?: boolean, ownerArg?: any, vAppParentArg?: any): vCloud.VApp {// WARNING: Auto generated code. Please, do not edit this code.
if (ownerArg != null) {
	targetEntityArg["owner"] = ownerArg;
}
if (inMaintenanceModeArg != null) {
	targetEntityArg["inMaintenanceMode"] = inMaintenanceModeArg;
}
if (vAppParentArg != null) {
	if (vAppParentArg instanceof VclReference) {
	    targetEntityArg["vAppParent"] = vAppParentArg;
	} else {
	    targetEntityArg["vAppParent"] = vAppParentArg.getReference();
	}
}
if (ovfDescriptorUploadedArg != null) {
	targetEntityArg["ovfDescriptorUploaded"] = ovfDescriptorUploadedArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (deployedArg != null) {
	targetEntityArg["deployed"] = deployedArg;
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
