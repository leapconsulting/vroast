/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition {
export function getAllWires(vm?: VC.VirtualMachine): Array<string> {host=
var result = new Array();
if ( host != null ) {
	for (var portgroup of host.configManager.networkSystem.networkInfo.portgroup) {
		if ( portgroup.name.indexOf("-virtualwire-") >= 0 ) {
			tmp=portgroup.name.split("-");
			name=tmp[tmp.length -1];
			result.push(portgroup.spec.name);
		}
	}
} 
return result;
}
}
