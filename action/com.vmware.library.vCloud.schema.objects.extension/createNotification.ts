/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createNotification(entityLinkArg?: Array<any>, eventIdArg?: string, operationSuccessArg?: boolean, timestampArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNotification();
result["timestamp"] = timestampArg;
result["eventId"] = eventIdArg;
var items = result["entityLink"];
for (var obj of entityLinkArg) {
	items.add(obj);
}
result["operationSuccess"] = operationSuccessArg;
return result;
}
}
