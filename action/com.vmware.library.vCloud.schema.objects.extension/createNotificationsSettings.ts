/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createNotificationsSettings(enableNotificationsArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNotificationsSettings();
result["enableNotifications"] = enableNotificationsArg;
return result;
}
}
