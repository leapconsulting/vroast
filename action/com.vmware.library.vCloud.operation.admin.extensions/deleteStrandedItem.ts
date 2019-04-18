/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function deleteStrandedItem(targetEntityArg?: vCloud.StrandedItem): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.erase();
}
}
