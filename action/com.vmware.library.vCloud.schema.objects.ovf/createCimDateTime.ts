/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createCimDateTime(cIMDateTimeArg?: string, dateArg?: any, datetimeArg?: any, intervalArg?: any, timeArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCimDateTime();
result["time"] = timeArg;
result["datetime"] = datetimeArg;
var value = new VclObject();
value.setValue(cIMDateTimeArg);
result["cIMDateTime"] = value;
result["interval"] = intervalArg;
result["date"] = dateArg;
return result;
}
}
