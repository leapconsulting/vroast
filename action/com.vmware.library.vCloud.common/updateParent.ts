/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function updateParent(entity?: any): void {if (entity.parent != null) {
	entity.parent.updateInternalState();
}
}
}
