/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAdminFileDescriptors(fileDescriptorArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAdminFileDescriptors();
var items = result["fileDescriptor"];
for (var obj of fileDescriptorArg) {
	items.add(obj);
}
return result;
}
}
