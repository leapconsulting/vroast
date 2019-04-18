/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminEventRecord(entityArg?: string, entityNameArg?: string, entityTypeArg?: string, eventIdArg?: string, eventStatusArg?: number, eventTypeArg?: string, metadataArg?: any, orgArg?: string, orgNameArg?: string, productVersionArg?: string, serviceNamespaceArg?: string, timeStampArg?: any, userNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminEventRecord();
result["entityType"] = entityTypeArg;
result["org"] = orgArg;
result["timeStamp"] = timeStampArg;
result["eventId"] = eventIdArg;
result["userName"] = userNameArg;
result["metadata"] = metadataArg;
result["productVersion"] = productVersionArg;
result["eventStatus"] = eventStatusArg;
result["serviceNamespace"] = serviceNamespaceArg;
result["orgName"] = orgNameArg;
result["entityName"] = entityNameArg;
result["eventType"] = eventTypeArg;
result["entity"] = entityArg;
return result;
}
}
