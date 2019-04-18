/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGatewayInterface(applyRateLimitArg?: boolean, displayNameArg?: string, inRateLimitArg?: number, interfaceTypeArg?: string, nameArg?: string, networkArg?: any, outRateLimitArg?: number, subnetParticipationArg?: Array<any>, useForDefaultRouteArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGatewayInterface();
var items = result["subnetParticipation"];
for (var obj of subnetParticipationArg) {
	items.add(obj);
}
if ((networkArg == null) || (networkArg instanceof VclReference)) {
	result["network"] = networkArg;
} else {
	result["network"] = networkArg.getReference();
}
result["interfaceType"] = interfaceTypeArg;
result["applyRateLimit"] = applyRateLimitArg;
result["inRateLimit"] = inRateLimitArg;
result["outRateLimit"] = outRateLimitArg;
result["useForDefaultRoute"] = useForDefaultRouteArg;
result["name"] = nameArg;
result["displayName"] = displayNameArg;
return result;
}
}
