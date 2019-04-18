/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyDatastore(targetEntityArg?: vCloud.VmwDatastore, busyArg?: boolean, datastoreFsTypeArg?: string, descriptionArg?: string, enabledArg?: boolean, membersArg?: any, mountDirectoryArg?: string, mountHostArg?: string, nameArg?: string, operationKeyArg?: string, provisionedSpaceGbArg?: number, provisionedSpaceMbArg?: number, requestedStorageGbArg?: number, requestedStorageMbArg?: number, systemMessagesArg?: string, thresholdRedGbArg?: number, thresholdYellowGbArg?: number, totalCapacityGbArg?: number, totalCapacityMbArg?: number, usedCapacityGbArg?: number, usedCapacityMbArg?: number, usedCapacityPercentArg?: number, vAAIForFpEnabledArg?: boolean, vcDisplayNameArg?: string, vimObjectRefArg?: any, vimPropertyPageUrlArg?: string): vCloud.VmwDatastore {// WARNING: Auto generated code. Please, do not edit this code.
if (vimObjectRefArg != null) {
	targetEntityArg["vimObjectRef"] = vimObjectRefArg;
}
if (systemMessagesArg != null) {
	targetEntityArg["systemMessages"] = systemMessagesArg;
}
if (vimPropertyPageUrlArg != null) {
	targetEntityArg["vimPropertyPageUrl"] = vimPropertyPageUrlArg;
}
if (vAAIForFpEnabledArg != null) {
	targetEntityArg["vAAIForFpEnabled"] = vAAIForFpEnabledArg;
}
if (thresholdYellowGbArg != null) {
	targetEntityArg["thresholdYellowGb"] = thresholdYellowGbArg;
}
if (thresholdRedGbArg != null) {
	targetEntityArg["thresholdRedGb"] = thresholdRedGbArg;
}
if (datastoreFsTypeArg != null) {
	targetEntityArg["datastoreFsType"] = datastoreFsTypeArg;
}
if (vcDisplayNameArg != null) {
	targetEntityArg["vcDisplayName"] = vcDisplayNameArg;
}
if (mountHostArg != null) {
	targetEntityArg["mountHost"] = mountHostArg;
}
if (mountDirectoryArg != null) {
	targetEntityArg["mountDirectory"] = mountDirectoryArg;
}
if (totalCapacityMbArg != null) {
	targetEntityArg["totalCapacityMb"] = totalCapacityMbArg;
}
if (busyArg != null) {
	targetEntityArg["busy"] = busyArg;
}
if (totalCapacityGbArg != null) {
	targetEntityArg["totalCapacityGb"] = totalCapacityGbArg;
}
if (usedCapacityMbArg != null) {
	targetEntityArg["usedCapacityMb"] = usedCapacityMbArg;
}
if (usedCapacityGbArg != null) {
	targetEntityArg["usedCapacityGb"] = usedCapacityGbArg;
}
if (usedCapacityPercentArg != null) {
	targetEntityArg["usedCapacityPercent"] = usedCapacityPercentArg;
}
if (provisionedSpaceMbArg != null) {
	targetEntityArg["provisionedSpaceMb"] = provisionedSpaceMbArg;
}
if (provisionedSpaceGbArg != null) {
	targetEntityArg["provisionedSpaceGb"] = provisionedSpaceGbArg;
}
if (requestedStorageMbArg != null) {
	targetEntityArg["requestedStorageMb"] = requestedStorageMbArg;
}
if (requestedStorageGbArg != null) {
	targetEntityArg["requestedStorageGb"] = requestedStorageGbArg;
}
if (enabledArg != null) {
	targetEntityArg["enabled"] = enabledArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (membersArg != null) {
	targetEntityArg["members"] = membersArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
return targetEntityArg;
}
}
