/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createCatalogSettings(isSyncEnabledArg?: boolean, refreshIntervalArg?: number, syncStartDateArg?: any, syncStopDateArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCatalogSettings();
result["syncStartDate"] = syncStartDateArg;
result["syncStopDate"] = syncStopDateArg;
result["refreshInterval"] = refreshIntervalArg;
result["isSyncEnabled"] = isSyncEnabledArg;
return result;
}
}
