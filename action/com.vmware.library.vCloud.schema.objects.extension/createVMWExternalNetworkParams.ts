/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWExternalNetworkParams(configurationArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, vimPortGroupRefArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWExternalNetworkParams();
result["vimPortGroupRef"] = vimPortGroupRefArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["configuration"] = configurationArg;
return result;
}
}
