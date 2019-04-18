/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyDisk(targetEntityArg?: vCloud.Disk, busSubTypeArg?: string, busTypeArg?: string, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, ownerArg?: any, sizeArg?: number, storageProfileArg?: any): vCloud.Disk {// WARNING: Auto generated code. Please, do not edit this code.
if (ownerArg != null) {
	targetEntityArg["owner"] = ownerArg;
}
if (storageProfileArg != null) {
	if (storageProfileArg instanceof VclReference) {
	    targetEntityArg["storageProfile"] = storageProfileArg;
	} else {
	    targetEntityArg["storageProfile"] = storageProfileArg.getReference();
	}
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (busTypeArg != null) {
	targetEntityArg["busType"] = busTypeArg;
}
if (busSubTypeArg != null) {
	targetEntityArg["busSubType"] = busSubTypeArg;
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
