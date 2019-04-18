/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createMetaDataEntries(metadataEntryArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclMetaDataEntries();
var items = result["metadataEntry"];
for (var obj of metadataEntryArg) {
	items.add(obj);
}
return result;
}
}
