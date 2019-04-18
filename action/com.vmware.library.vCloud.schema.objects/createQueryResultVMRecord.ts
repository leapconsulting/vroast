/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultVMRecord(catalogNameArg?: string, containerArg?: string, containerNameArg?: string, guestOsArg?: string, hardwareVersionArg?: number, isBusyArg?: boolean, isDeletedArg?: boolean, isDeployedArg?: boolean, isInMaintenanceModeArg?: boolean, isPublishedArg?: boolean, isVAppTemplateArg?: boolean, memoryMBArg?: number, metadataArg?: any, nameArg?: string, numberOfCpusArg?: number, statusArg?: string, storageProfileNameArg?: string, vdcArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultVMRecord();
result["container"] = containerArg;
result["metadata"] = metadataArg;
result["containerName"] = containerNameArg;
result["storageProfileName"] = storageProfileNameArg;
result["guestOs"] = guestOsArg;
result["hardwareVersion"] = hardwareVersionArg;
result["numberOfCpus"] = numberOfCpusArg;
result["isVAppTemplate"] = isVAppTemplateArg;
result["memoryMB"] = memoryMBArg;
result["isBusy"] = isBusyArg;
result["isDeleted"] = isDeletedArg;
result["isInMaintenanceMode"] = isInMaintenanceModeArg;
result["catalogName"] = catalogNameArg;
result["isDeployed"] = isDeployedArg;
result["vdc"] = vdcArg;
result["isPublished"] = isPublishedArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
