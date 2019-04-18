/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Host {
export function getHostByUrl(url?: string, username?: string, organization?: string): vCloud.Host {if (url == null || username == null || organization == null) {
	throw "A required argument is null";
}
var host = VclHostManager.getHostByUrl(url, username, organization);
if (host != null) {
	host.login();
} else {
	throw "Host not found. URL: " + url + " Username:" + username + "@" + organization;
}
return host;

}
}
