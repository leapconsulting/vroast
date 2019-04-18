/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVAppNetworkConfiguration(configurationArg?: any, descriptionArg?: string, isDeployedArg?: boolean, networkNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVAppNetworkConfiguration();
result["networkName"] = networkNameArg;
result["isDeployed"] = isDeployedArg;
result["description"] = descriptionArg;
result["configuration"] = configurationArg;
return result;
}
}
