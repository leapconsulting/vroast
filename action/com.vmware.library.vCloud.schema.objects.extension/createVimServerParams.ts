/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVimServerParams(descriptionArg?: string, isConnectedArg?: boolean, isEnabledArg?: boolean, nameArg?: string, operationKeyArg?: string, passwordArg?: string, shieldManagerHostArg?: string, shieldManagerUserNameArg?: string, urlArg?: string, useVsphereServiceArg?: boolean, usernameArg?: string, uuidArg?: string, vcProxyArg?: string, vcVersionArg?: string, vsphereWebClientServerUrlArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVimServerParams();
result["vsphereWebClientServerUrl"] = vsphereWebClientServerUrlArg;
result["username"] = usernameArg;
result["password"] = passwordArg;
result["vcVersion"] = vcVersionArg;
result["vcProxy"] = vcProxyArg;
result["uuid"] = uuidArg;
result["useVsphereService"] = useVsphereServiceArg;
result["isConnected"] = isConnectedArg;
result["shieldManagerHost"] = shieldManagerHostArg;
result["shieldManagerUserName"] = shieldManagerUserNameArg;
result["url"] = urlArg;
result["isEnabled"] = isEnabledArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
