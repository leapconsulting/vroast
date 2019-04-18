/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function convertToArray(value?: any): Array<any> {if (value == null) {
	throw "Array value is null";
}
return [value];
}
}
