/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Extension.Notifications {
export function composeRoutingKey(operationSuccess?: string, entityId?: string, organizationId?: string, userId?: string, eventTypes?: Array<string>, taskName?: string): string {if (operationSuccess == null || 
    entityId == null 		 ||
    organizationId == null   ||
    userId == null			 ||
	eventTypes == null) {
	throw "One or more arguments are null.";
}
if (eventTypes.length == 0) {
	throw "No event types are specified.";
}
var eventTypesString = new String();
for (var i = 0; i < eventTypes.length; i++) {
	eventTypesString = eventTypesString.concat(eventTypes[i]);
	if (i < eventTypes.length - 1) {
		eventTypesString = eventTypesString.concat(".");
	}
}
var routingKey = operationSuccess.concat(".", entityId, ".", organizationId, ".", userId, ".", eventTypesString);
if (taskName != null) {
	routingKey = routingKey.concat(".", taskName);
}
return routingKey;
}
}
