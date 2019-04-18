/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultEventRecord(entityArg?: string, entityNameArg?: string, entityTypeArg?: string, eventStatusArg?: number, eventTypeArg?: string, metadataArg?: any, orgNameArg?: string, serviceNamespaceArg?: string, timeStampArg?: any, userNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultEventRecord();
result["entityType"] = entityTypeArg;
result["timeStamp"] = timeStampArg;
result["userName"] = userNameArg;
result["metadata"] = metadataArg;
result["eventStatus"] = eventStatusArg;
result["serviceNamespace"] = serviceNamespaceArg;
result["orgName"] = orgNameArg;
result["entityName"] = entityNameArg;
result["eventType"] = eventTypeArg;
result["entity"] = entityArg;
return result;
}
}
