/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.rest {
export function getOrCreateRestHostByUrl(url?: string, credentials?: any, operationTimeout?: number): REST.RESTHost {if (!url) {
	throw "'url' cannot be empty";
}



var hosts = Server.findAllForType("REST:RESTHost");

hosts = hosts.filter(function(host) {
	return host.url == url;
});


var authenticationOptions = credentials ? ["Shared Session", credentials.username, credentials.password] : [null, null, null];
var authenticationMethod = credentials ? "Basic" : "NONE";
var authenticationObject = RESTAuthenticationManager.createAuthentication(authenticationMethod, authenticationOptions);

var host;

if (hosts.length > 0) {	
	host = hosts[0];
	
	if (credentials && !host.authentication) {
		host = host.clone();
		host.authentication = authenticationObject;
	}

	return host;
}

host = new RESTHost(url);
host.url = url;
host.connectionTimeout = 30;
host.operationTimeout = operationTimeout || 120;
host.hostVerification = false;
host.proxyHost = null;
host.proxyPort = null;
host.authentication = authenticationObject;


host = RESTHostManager.addHost(host);
System.log("Created REST host for '" + host.url + "'");


return RESTHostManager.getHost(host.id); // We somehow can't use host directly (some error about initiailzation), so we re-fetch it.
}
}
