/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function validateIpRanges(ipRanges?: Array<string>, mandatory?: boolean): string {if ((mandatory) && (ipRanges == null)) {
	return "Invalid IP Ranges! (null)";
}

if (ipRanges != null) {

	if (ipRanges.length == 0) {
		return "Invalid IP Ranges! (empty)";
	}
	
	for (var var index = 0; index < ipRanges.length; index++) {
	
		var ips = ipRanges[index].split("-");
	
		if ((ips[0] == null) || (ips[1] == null) || (ips.length > 2)) {
			return "Invalid IP Range! (" + ipRanges[index] + ")";
		}
		
		var msg0 = com.vmware.library.vCloud.common.validateIp(ips[0], true);
		var msg1 = com.vmware.library.vCloud.common.validateIp(ips[1], true);
	
		if ((msg0 != null) || (msg1 != null)) {
			return "Invalid IP Range! (" + ipRanges[index] + ")";
		}
	}
}

return null;
}
}
