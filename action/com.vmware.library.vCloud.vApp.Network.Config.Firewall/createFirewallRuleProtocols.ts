/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.Network.Config.Firewall {
export function createFirewallRuleProtocols(udp?: boolean, tcp?: boolean, icmp?: boolean, any?: boolean): any {var protocols = new VclFirewallRuleProtocols();
if (any == true) {
	protocols.any = true;
} else
if (icmp == true) {
	protocols.icmp = true;
} else {
	protocols.tcp = tcp;
	protocols.udp = udp;
}
return protocols;
}
}
