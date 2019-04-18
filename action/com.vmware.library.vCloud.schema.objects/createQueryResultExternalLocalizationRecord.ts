/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultExternalLocalizationRecord(keyArg?: string, localeArg?: string, metadataArg?: any, serviceNamespaceArg?: string, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultExternalLocalizationRecord();
result["locale"] = localeArg;
result["metadata"] = metadataArg;
result["serviceNamespace"] = serviceNamespaceArg;
result["value"] = valueArg;
result["key"] = keyArg;
return result;
}
}
