/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCopyOrMoveCatalogItemParams(descriptionArg?: string, nameArg?: string, sourceArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCopyOrMoveCatalogItemParams();
if ((sourceArg == null) || (sourceArg instanceof VclReference)) {
	result["source"] = sourceArg;
} else {
	result["source"] = sourceArg.getReference();
}
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
