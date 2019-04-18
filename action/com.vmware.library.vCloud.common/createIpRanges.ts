/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createIpRanges(ipAddressRanges?: Array<string>): any {if (ipAddressRanges == null) {
	return null;
}

var ipRanges = new VclIpRanges();

for (var var index = 0; index < ipAddressRanges.length; index++) {

	var ips = ipAddressRanges[index].split("-");

	var ipRange = new VclIpRange();
	ipRange.startAddress = ips[0].replace(new RegExp(" ", "g"),"");
	ipRange.endAddress = ips[1].replace(new RegExp(" ", "g"),"");
	ipRanges.ipRange.add(ipRange);
}

return ipRanges;

}
}
