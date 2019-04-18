/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function changeOwnerAdminCatalog(targetEntityArg?: vCloud.AdminCatalog, valueArg?: any): void {// WARNING: Auto generated code. Please, do not edit this code.
if ((valueArg != null) && !(valueArg instanceof VclReference)) {
	valueArg = valueArg.getReference();
}
targetEntityArg.changeOwner(valueArg);
}
}
