/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyMedia(targetEntityArg?: vCloud.Media, descriptionArg?: string, imageTypeArg?: string, nameArg?: string, operationKeyArg?: string, ownerArg?: any, sizeArg?: number, vdcStorageProfileArg?: any): vCloud.Media {// WARNING: Auto generated code. Please, do not edit this code.
if (ownerArg != null) {
	targetEntityArg["owner"] = ownerArg;
}
if (imageTypeArg != null) {
	targetEntityArg["imageType"] = imageTypeArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (vdcStorageProfileArg != null) {
	if (vdcStorageProfileArg instanceof VclReference) {
	    targetEntityArg["vdcStorageProfile"] = vdcStorageProfileArg;
	} else {
	    targetEntityArg["vdcStorageProfile"] = vdcStorageProfileArg.getReference();
	}
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (sizeArg != null) {
	targetEntityArg["size"] = sizeArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
return targetEntityArg;
}
}
