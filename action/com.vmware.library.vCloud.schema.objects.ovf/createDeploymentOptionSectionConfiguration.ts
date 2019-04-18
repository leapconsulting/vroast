/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createDeploymentOptionSectionConfiguration(defaultArg?: boolean, descriptionArg?: any, labelArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDeploymentOptionSectionConfiguration();
result["label"] = labelArg;
result["default"] = defaultArg;
result["description"] = descriptionArg;
return result;
}
}
