/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf.environment {
export function createPlatformSection(kindArg?: any, localeArg?: any, timezoneArg?: number, vendorArg?: any, versionArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclPlatformSection();
result["version"] = versionArg;
result["locale"] = localeArg;
result["timezone"] = timezoneArg;
result["kind"] = kindArg;
result["vendor"] = vendorArg;
return result;
}
}
