/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createAccessSetting(accessLevelArg?: string, subjectArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAccessSetting();
result["accessLevel"] = accessLevelArg;
if ((subjectArg == null) || (subjectArg instanceof VclReference)) {
	result["subject"] = subjectArg;
} else {
	result["subject"] = subjectArg.getReference();
}
return result;
}
}
