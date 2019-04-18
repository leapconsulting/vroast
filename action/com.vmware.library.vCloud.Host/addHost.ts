/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Host {
export function addHost(host?: string, port?: number, organization?: string, sessionMode?: vCloud.HostSessionMode, useSamlAuthentication?: boolean, samlTokenCallbackAction?: Action, username?: string, password?: SecureString, enabled?: boolean, maxConnections?: number, connectionTimeout?: number, cacheTimeout?: number): vCloud.Host {var newHost = VclHostManager.createHost();
newHost.url = "https://" + host + ":" + port;
newHost.organization = organization;
newHost.sessionMode = sessionMode;
newHost.useSamlAuthentication = useSamlAuthentication;
if (useSamlAuthentication) {
	newHost.setSamlTokenCallback(samlTokenCallbackAction);
} else {
	newHost.setUsername(username);
	newHost.setPassword(password);
}
newHost.cacheTimeout = cacheTimeout;
newHost.enabled = enabled;
newHost.maxConnections = maxConnections;
newHost.connectionTimeout = connectionTimeout;
newHost.apiVersion = apiVersion;
VclHostManager.addOrUpdateHosts([newHost], true);
return newHost;

}
}
