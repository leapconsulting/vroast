/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyCatalogSettings(targetEntityArg?: any, isSyncEnabledArg?: boolean, refreshIntervalArg?: number, syncStartDateArg?: any, syncStopDateArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
if (syncStartDateArg != null) {
	targetEntityArg["syncStartDate"] = syncStartDateArg;
}
if (syncStopDateArg != null) {
	targetEntityArg["syncStopDate"] = syncStopDateArg;
}
if (refreshIntervalArg != null) {
	targetEntityArg["refreshInterval"] = refreshIntervalArg;
}
if (isSyncEnabledArg != null) {
	targetEntityArg["isSyncEnabled"] = isSyncEnabledArg;
}
return targetEntityArg;
}
}
