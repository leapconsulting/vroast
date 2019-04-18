/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function validateIps(ips?: Array<string>, mandatory?: boolean): string {if ((mandatory) && (ips == null)) {
	return "Invalid IPs! (null)";
}

if (ips != null) {

	if (ips.length == 0) {
		return "Invalid IPs! (empty)";
	}

	for (var var index = 0; index < ips.length; index++) {

		var msg = com.vmware.library.vCloud.common.validateIp(ips[index], true);
	
		if (msg != null) {
			return msg;
		}
	}
}

return null;
}
}
