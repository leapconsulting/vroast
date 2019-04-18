/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.dhcp {
export function executePowershellScript(environment?: string, script?: Text): any {var data = nl.umcg.data;

var dhcp = data.getDhcpByEnvironment(environment)

var psHosts = Server.findAllForType("PowerShell:PowerShellHost");

var host = psHosts.filter(function(psHost) {
	return psHost.name == dhcp.powershellHost;
})[0];

if (!host) {
	throw "Could not find PowershellHost.";
}


var output;
var session;
try {
	session = host.openSession();
	output = com.vmware.library.powershell.invokeScript(host,script,session.getSessionId()) ;
} finally {
	if (session){
		host.closeSession(session.getSessionId());
	}
}

return output;
}
}
