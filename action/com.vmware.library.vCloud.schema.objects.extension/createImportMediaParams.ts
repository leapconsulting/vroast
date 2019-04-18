/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createImportMediaParams(catalogArg?: any, datastoreMoRefArg?: string, descriptionArg?: string, nameArg?: string, sourceMoveArg?: boolean, sourcePathArg?: string, vdcArg?: any, vdcStorageProfileArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclImportMediaParams();
if ((vdcStorageProfileArg == null) || (vdcStorageProfileArg instanceof VclReference)) {
	result["vdcStorageProfile"] = vdcStorageProfileArg;
} else {
	result["vdcStorageProfile"] = vdcStorageProfileArg.getReference();
}
result["sourceMove"] = sourceMoveArg;
result["datastoreMoRef"] = datastoreMoRefArg;
if ((vdcArg == null) || (vdcArg instanceof VclReference)) {
	result["vdc"] = vdcArg;
} else {
	result["vdc"] = vdcArg.getReference();
}
if ((catalogArg == null) || (catalogArg instanceof VclReference)) {
	result["catalog"] = catalogArg;
} else {
	result["catalog"] = catalogArg.getReference();
}
result["sourcePath"] = sourcePathArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
