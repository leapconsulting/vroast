/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultResourcePoolVMRecord(containerNameArg?: string, guestOsArg?: string, hardwareVersionArg?: number, isBusyArg?: boolean, isDeployedArg?: boolean, metadataArg?: any, nameArg?: string, statusArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultResourcePoolVMRecord();
result["metadata"] = metadataArg;
result["containerName"] = containerNameArg;
result["guestOs"] = guestOsArg;
result["hardwareVersion"] = hardwareVersionArg;
result["isBusy"] = isBusyArg;
result["isDeployed"] = isDeployedArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
