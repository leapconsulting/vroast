/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createOperatingSystemSection(descriptionArg?: any, infoArg?: any, requiredArg?: boolean, versionArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOperatingSystemSection();
result["version"] = versionArg;
result["info"] = infoArg;
result["required"] = requiredArg;
result["description"] = descriptionArg;
return result;
}
}
