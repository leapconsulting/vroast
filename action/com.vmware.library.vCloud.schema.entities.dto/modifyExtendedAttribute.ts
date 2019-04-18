/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.dto {
export function modifyExtendedAttribute(targetEntityArg?: any, nameArg?: string, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (valueArg != null) {
	targetEntityArg["value"] = valueArg;
}
return targetEntityArg;
}
}
