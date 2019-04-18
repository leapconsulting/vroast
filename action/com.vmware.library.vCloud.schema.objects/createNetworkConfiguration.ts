/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworkConfiguration(backwardCompatibilityModeArg?: boolean, featuresArg?: any, fenceModeArg?: string, ipScopeArg?: any, ipScopesArg?: any, parentNetworkArg?: any, retainNetInfoAcrossDeploymentsArg?: boolean, routerInfoArg?: any, syslogServerSettingsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkConfiguration();
result["ipScopes"] = ipScopesArg;
if ((parentNetworkArg == null) || (parentNetworkArg instanceof VclReference)) {
	result["parentNetwork"] = parentNetworkArg;
} else {
	result["parentNetwork"] = parentNetworkArg.getReference();
}
result["features"] = featuresArg;
result["routerInfo"] = routerInfoArg;
result["retainNetInfoAcrossDeployments"] = retainNetInfoAcrossDeploymentsArg;
result["fenceMode"] = fenceModeArg;
result["ipScope"] = ipScopeArg;
result["syslogServerSettings"] = syslogServerSettingsArg;
result["backwardCompatibilityMode"] = backwardCompatibilityModeArg;
return result;
}
}
