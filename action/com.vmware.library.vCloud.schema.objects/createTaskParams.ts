/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createTaskParams(cancelRequestedArg?: boolean, descriptionArg?: string, detailsArg?: string, endTimeArg?: any, errorArg?: any, expiryTimeArg?: any, nameArg?: string, operationArg?: string, operationKeyArg?: string, operationNameArg?: string, organizationArg?: any, ownerArg?: any, paramsArg?: any, progressArg?: number, serviceNamespaceArg?: string, startTimeArg?: any, statusArg?: string, userArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclTaskParams();
if ((ownerArg == null) || (ownerArg instanceof VclReference)) {
	result["owner"] = ownerArg;
} else {
	result["owner"] = ownerArg.getReference();
}
if ((organizationArg == null) || (organizationArg instanceof VclReference)) {
	result["organization"] = organizationArg;
} else {
	result["organization"] = organizationArg.getReference();
}
result["error"] = errorArg;
result["details"] = detailsArg;
result["endTime"] = endTimeArg;
result["expiryTime"] = expiryTimeArg;
result["operation"] = operationArg;
result["operationName"] = operationNameArg;
if ((userArg == null) || (userArg instanceof VclReference)) {
	result["user"] = userArg;
} else {
	result["user"] = userArg.getReference();
}
result["cancelRequested"] = cancelRequestedArg;
result["progress"] = progressArg;
result["serviceNamespace"] = serviceNamespaceArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["startTime"] = startTimeArg;
result["params"] = paramsArg;
return result;
}
}
