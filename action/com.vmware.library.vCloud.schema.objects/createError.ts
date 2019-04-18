/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createError(majorErrorCodeArg?: number, messageArg?: string, minorErrorCodeArg?: string, stackTraceArg?: string, vendorSpecificErrorCodeArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclError();
result["message"] = messageArg;
result["stackTrace"] = stackTraceArg;
result["minorErrorCode"] = minorErrorCodeArg;
result["vendorSpecificErrorCode"] = vendorSpecificErrorCodeArg;
result["majorErrorCode"] = majorErrorCodeArg;
return result;
}
}
