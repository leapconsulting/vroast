/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Host {
export function login(url?: string, organization?: string, useSamlAuthentication?: boolean, samlTokenCallbackAction?: Action, username?: string, password?: string, maxConnections?: number, connectionTimeout?: number, cacheTimeout?: number): vCloud.Host {var host = VclHostManager.createHost();
host.url = url;
host.enabled = true;
host.maxConnections = maxConnections;
host.connectionTimeout = connectionTimeout;
host.sessionMode = VclHostSessionMode.SHARED_SESSION;
host.organization = organization;
host.cacheTimeout = cacheTimeout;
host.useSamlAuthentication = useSamlAuthentication;
if (useSamlAuthentication) {
	host.setSamlTokenCallback(samlTokenCallbackAction);
} else {
	host.setUsername(username);
	host.setPassword(password);
}
host.login();
return host;
}
}
