/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminVMRecord(catalogNameArg?: string, containerArg?: string, containerNameArg?: string, datastoreNameArg?: string, guestOsArg?: string, hardwareVersionArg?: number, hostNameArg?: string, isDeletedArg?: boolean, isDeployedArg?: boolean, isPublishedArg?: boolean, isVAppTemplateArg?: boolean, isVdcEnabledArg?: boolean, memoryMBArg?: number, metadataArg?: any, morefArg?: string, nameArg?: string, networkNameArg?: string, numberOfCpusArg?: number, orgArg?: string, statusArg?: string, storageProfileNameArg?: string, vcArg?: string, vdcArg?: string, vmToolsVersionArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminVMRecord();
result["org"] = orgArg;
result["container"] = containerArg;
result["metadata"] = metadataArg;
result["containerName"] = containerNameArg;
result["storageProfileName"] = storageProfileNameArg;
result["guestOs"] = guestOsArg;
result["hardwareVersion"] = hardwareVersionArg;
result["numberOfCpus"] = numberOfCpusArg;
result["isVAppTemplate"] = isVAppTemplateArg;
result["memoryMB"] = memoryMBArg;
result["isDeleted"] = isDeletedArg;
result["vc"] = vcArg;
result["networkName"] = networkNameArg;
result["datastoreName"] = datastoreNameArg;
result["vmToolsVersion"] = vmToolsVersionArg;
result["catalogName"] = catalogNameArg;
result["isVdcEnabled"] = isVdcEnabledArg;
result["isDeployed"] = isDeployedArg;
result["moref"] = morefArg;
result["vdc"] = vdcArg;
result["isPublished"] = isPublishedArg;
result["name"] = nameArg;
result["hostName"] = hostNameArg;
result["status"] = statusArg;
return result;
}
}
