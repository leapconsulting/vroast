/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createMsg(msgidArg?: string, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclMsg();
result["msgid"] = msgidArg;
result["value"] = valueArg;
return result;
}
}
