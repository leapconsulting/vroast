/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function validateVlanIdRanges(vlanIdRanges?: Array<string>, mandatory?: boolean): string {if ((mandatory) && (vlanIdRanges == null)) {
	return "Invalid VLAN ID Ranges! (null)";
}

if (vlanIdRanges != null) {

	if (vlanIdRanges.length == 0) {
		return "Invalid VLAN ID Ranges! (empty)";
	}
	
	for (var var index = 0; index < vlanIdRanges.length; index++) {
	
		var ids = vlanIdRanges[index].split("-");
	
		if ((ids[0] == null) || (ids[1] == null) || (ids.length > 2)) {
			return "Invalid VLAN ID Range! (" + vlanIdRanges[index] + ")";
		}
		
		var msg0 = com.vmware.library.vCloud.common.validateVlanId(ids[0], true);
		var msg1 = com.vmware.library.vCloud.common.validateVlanId(ids[1], true);
	
		if ((msg0 != null) || (msg1 != null)) {
			return "Invalid VLAN ID Range! (" + vlanIdRanges[index] + ")";
		}
	}
}

return null;
}
}
