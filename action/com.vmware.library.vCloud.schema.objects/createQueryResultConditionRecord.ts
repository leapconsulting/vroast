/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultConditionRecord(detailsArg?: string, metadataArg?: any, objectArg?: string, objectTypeArg?: string, occurenceDateArg?: any, severityArg?: string, summaryArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultConditionRecord();
result["severity"] = severityArg;
result["objectType"] = objectTypeArg;
result["metadata"] = metadataArg;
result["details"] = detailsArg;
result["summary"] = summaryArg;
result["occurenceDate"] = occurenceDateArg;
result["object"] = objectArg;
return result;
}
}
