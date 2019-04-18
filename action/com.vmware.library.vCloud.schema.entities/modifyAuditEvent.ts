/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyAuditEvent(targetEntityArg?: vCloud.AuditEvent, descriptionArg?: string, detailsArg?: string, eventTypeArg?: string, nameArg?: string, operationKeyArg?: string, orgArg?: any, ownerArg?: any, serviceNamespaceArg?: string, successArg?: boolean, timeStampArg?: any, userArg?: any): vCloud.AuditEvent {// WARNING: Auto generated code. Please, do not edit this code.
if (ownerArg != null) {
	if (ownerArg instanceof VclReference) {
	    targetEntityArg["owner"] = ownerArg;
	} else {
	    targetEntityArg["owner"] = ownerArg.getReference();
	}
}
if (orgArg != null) {
	if (orgArg instanceof VclReference) {
	    targetEntityArg["org"] = orgArg;
	} else {
	    targetEntityArg["org"] = orgArg.getReference();
	}
}
if (timeStampArg != null) {
	targetEntityArg["timeStamp"] = timeStampArg;
}
if (detailsArg != null) {
	targetEntityArg["details"] = detailsArg;
}
if (userArg != null) {
	if (userArg instanceof VclReference) {
	    targetEntityArg["user"] = userArg;
	} else {
	    targetEntityArg["user"] = userArg.getReference();
	}
}
if (serviceNamespaceArg != null) {
	targetEntityArg["serviceNamespace"] = serviceNamespaceArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (successArg != null) {
	targetEntityArg["success"] = successArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (eventTypeArg != null) {
	targetEntityArg["eventType"] = eventTypeArg;
}
return targetEntityArg;
}
}
