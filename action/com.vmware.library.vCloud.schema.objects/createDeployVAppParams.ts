/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createDeployVAppParams(deploymentLeaseSecondsArg?: number, forceCustomizationArg?: boolean, powerOnArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDeployVAppParams();
result["powerOn"] = powerOnArg;
result["deploymentLeaseSeconds"] = deploymentLeaseSecondsArg;
result["forceCustomization"] = forceCustomizationArg;
return result;
}
}
