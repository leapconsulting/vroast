/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createRightsList(rights?: Array<vCloud.Right>): any {var rightRefs = new VclRightReferences();
if (rights != null) {
	var arr = new Array(rights.length);
	for (var i = 0; i < rights.length; i++) {
		arr[i] = rights[i].getReference();
	}
	rightRefs.rightReferences = arr;
}
return rightRefs;
}
}
