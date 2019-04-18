/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createVlanIdRanges(vlanIdRanges?: Array<string>): Array<any> {if (vlanIdRanges == null) {
	return null;
}

var ranges = new Array(vlanIdRanges.length);

for (var var index = 0; index < vlanIdRanges.length; index++) {

	var ids = vlanIdRanges[index].split("-");

	var idRange = new VclNumericRange();
	idRange.start = ids[0].replace(new RegExp(" ", "g"),"");
	idRange.end = ids[1].replace(new RegExp(" ", "g"),"");
	ranges[index] = idRange;
}

return ranges;

}
}
