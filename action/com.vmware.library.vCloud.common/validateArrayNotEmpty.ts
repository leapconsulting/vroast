/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function validateArrayNotEmpty(array?: Array<any>): string {if (array != null && array.length == 0) return "Array is empty";
return null;
}
}
