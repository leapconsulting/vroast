/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Host {
export function updateHost(organization?: string, sessionMode?: vCloud.HostSessionMode, useSamlAuthentication?: boolean, username?: string, password?: SecureString, cacheTimeout?: number, maxConnections?: number, connectionTimeout?: number, samlTokenCallbackAction?: Action, vCloudHost?: vCloud.Host, enabled?: boolean): vCloud.Host {var newHost = VclHostManager.createHost();
newHost.url = vCloudHost.url;
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
newHost.login();
newHost.logout();

VclHostManager.removeHosts([vCloudHost]);

VclHostManager.addOrUpdateHosts([newHost], true);
return newHost;
}
}
