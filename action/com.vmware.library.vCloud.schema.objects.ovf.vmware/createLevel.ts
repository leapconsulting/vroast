/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
export function createLevel(eaxArg?: string, ebxArg?: string, ecxArg?: string, edxArg?: string, levelArg?: string, vendorArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLevel();
result["vendor"] = vendorArg;
result["ebx"] = ebxArg;
result["eax"] = eaxArg;
result["ecx"] = ecxArg;
result["edx"] = edxArg;
result["level"] = levelArg;
return result;
}
}
