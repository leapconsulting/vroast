/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworkConnection(externalIpAddressArg?: string, ipAddressArg?: string, ipAddressAllocationModeArg?: string, isConnectedArg?: boolean, mACAddressArg?: string, needsCustomizationArg?: boolean, networkArg?: string, networkConnectionIndexArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkConnection();
result["isConnected"] = isConnectedArg;
result["networkConnectionIndex"] = networkConnectionIndexArg;
result["mACAddress"] = mACAddressArg;
result["ipAddressAllocationMode"] = ipAddressAllocationModeArg;
result["needsCustomization"] = needsCustomizationArg;
result["externalIpAddress"] = externalIpAddressArg;
result["ipAddress"] = ipAddressArg;
result["network"] = networkArg;
return result;
}
}
