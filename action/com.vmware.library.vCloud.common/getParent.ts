/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function getParent(entity?: any): any {if (entity == null) {
	return null;
}
return entity.parent;
}
}
