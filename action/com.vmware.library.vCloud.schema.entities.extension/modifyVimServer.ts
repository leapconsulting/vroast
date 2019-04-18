/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyVimServer(targetEntityArg?: vCloud.VimServer, descriptionArg?: string, isConnectedArg?: boolean, isEnabledArg?: boolean, nameArg?: string, operationKeyArg?: string, passwordArg?: string, shieldManagerHostArg?: string, shieldManagerUserNameArg?: string, urlArg?: string, useVsphereServiceArg?: boolean, usernameArg?: string, uuidArg?: string, vcProxyArg?: string, vcVersionArg?: string, vsphereWebClientServerUrlArg?: string): vCloud.VimServer {// WARNING: Auto generated code. Please, do not edit this code.
if (vsphereWebClientServerUrlArg != null) {
	targetEntityArg["vsphereWebClientServerUrl"] = vsphereWebClientServerUrlArg;
}
if (usernameArg != null) {
	targetEntityArg["username"] = usernameArg;
}
if (passwordArg != null) {
	targetEntityArg["password"] = passwordArg;
}
if (vcVersionArg != null) {
	targetEntityArg["vcVersion"] = vcVersionArg;
}
if (vcProxyArg != null) {
	targetEntityArg["vcProxy"] = vcProxyArg;
}
if (uuidArg != null) {
	targetEntityArg["uuid"] = uuidArg;
}
if (useVsphereServiceArg != null) {
	targetEntityArg["useVsphereService"] = useVsphereServiceArg;
}
if (isConnectedArg != null) {
	targetEntityArg["isConnected"] = isConnectedArg;
}
if (shieldManagerHostArg != null) {
	targetEntityArg["shieldManagerHost"] = shieldManagerHostArg;
}
if (shieldManagerUserNameArg != null) {
	targetEntityArg["shieldManagerUserName"] = shieldManagerUserNameArg;
}
if (urlArg != null) {
	targetEntityArg["url"] = urlArg;
}
if (isEnabledArg != null) {
	targetEntityArg["isEnabled"] = isEnabledArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
return targetEntityArg;
}
}
