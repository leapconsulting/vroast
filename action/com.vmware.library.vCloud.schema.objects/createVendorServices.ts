/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVendorServices(edgeGatewayServicesArg?: Array<any>, networkServicesArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVendorServices();
var items = result["edgeGatewayServices"];
for (var obj of edgeGatewayServicesArg) {
	items.add(obj);
}
var items = result["networkServices"];
for (var obj of networkServicesArg) {
	items.add(obj);
}
return result;
}
}
