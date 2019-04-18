/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGatewayConfiguration(backwardCompatibilityModeArg?: boolean, edgeGatewayServiceConfigurationArg?: any, gatewayBackingConfigArg?: string, gatewayInterfacesArg?: any, haEnabledArg?: boolean, useDefaultRouteForDnsRelayArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGatewayConfiguration();
result["edgeGatewayServiceConfiguration"] = edgeGatewayServiceConfigurationArg;
result["gatewayBackingConfig"] = gatewayBackingConfigArg;
result["haEnabled"] = haEnabledArg;
result["useDefaultRouteForDnsRelay"] = useDefaultRouteForDnsRelayArg;
result["gatewayInterfaces"] = gatewayInterfacesArg;
result["backwardCompatibilityMode"] = backwardCompatibilityModeArg;
return result;
}
}
