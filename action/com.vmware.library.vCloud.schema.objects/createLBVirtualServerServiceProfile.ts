/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLBVirtualServerServiceProfile(isEnabledArg?: boolean, persistenceArg?: any, portArg?: string, protocolArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLBVirtualServerServiceProfile();
result["isEnabled"] = isEnabledArg;
result["persistence"] = persistenceArg;
result["protocol"] = protocolArg;
result["port"] = portArg;
return result;
}
}
