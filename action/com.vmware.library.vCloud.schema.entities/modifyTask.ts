/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyTask(targetEntityArg?: vCloud.Task, cancelRequestedArg?: boolean, descriptionArg?: string, detailsArg?: string, endTimeArg?: any, errorArg?: any, expiryTimeArg?: any, nameArg?: string, operationArg?: string, operationKeyArg?: string, operationNameArg?: string, organizationArg?: any, ownerArg?: any, paramsArg?: any, progressArg?: number, serviceNamespaceArg?: string, startTimeArg?: any, userArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
if (ownerArg != null) {
	if (ownerArg instanceof VclReference) {
	    targetEntityArg["owner"] = ownerArg;
	} else {
	    targetEntityArg["owner"] = ownerArg.getReference();
	}
}
if (organizationArg != null) {
	if (organizationArg instanceof VclReference) {
	    targetEntityArg["organization"] = organizationArg;
	} else {
	    targetEntityArg["organization"] = organizationArg.getReference();
	}
}
if (errorArg != null) {
	targetEntityArg["error"] = errorArg;
}
if (detailsArg != null) {
	targetEntityArg["details"] = detailsArg;
}
if (endTimeArg != null) {
	targetEntityArg["endTime"] = endTimeArg;
}
if (expiryTimeArg != null) {
	targetEntityArg["expiryTime"] = expiryTimeArg;
}
if (operationArg != null) {
	targetEntityArg["operation"] = operationArg;
}
if (operationNameArg != null) {
	targetEntityArg["operationName"] = operationNameArg;
}
if (userArg != null) {
	if (userArg instanceof VclReference) {
	    targetEntityArg["user"] = userArg;
	} else {
	    targetEntityArg["user"] = userArg.getReference();
	}
}
if (cancelRequestedArg != null) {
	targetEntityArg["cancelRequested"] = cancelRequestedArg;
}
if (progressArg != null) {
	targetEntityArg["progress"] = progressArg;
}
if (serviceNamespaceArg != null) {
	targetEntityArg["serviceNamespace"] = serviceNamespaceArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (startTimeArg != null) {
	targetEntityArg["startTime"] = startTimeArg;
}
if (paramsArg != null) {
	targetEntityArg["params"] = paramsArg;
}
return targetEntityArg;
}
}
