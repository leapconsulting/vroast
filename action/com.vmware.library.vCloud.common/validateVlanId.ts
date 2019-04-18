/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function validateVlanId(vlanId?: string, mandatory?: boolean): string {if ((mandatory) && (vlanId == null)) {
	return "Invalid VLAN ID! (null)";
}

if (vlanId != null) {

	vlanId = vlanId.replace(new RegExp(" ", "g"), "");
	
	if (vlanId.length == 0) {
		if (mandatory) {
			return "Invalid VLAN ID! (empty)";
		} else {
			return null;
		}
	}
	
	if (!vlanId.match(new RegExp("^[0-9]+$"))) {
		return "Invalid VLAN ID! (" + vlanId + ")";
	}
}

return null;
}
}
