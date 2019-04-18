/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function updateStorageProfileVirtualDisk(targetEntityArg?: any, arg0?: any): void {// WARNING: Auto generated code. Please, do not edit this code.
if ((arg0 != null) && !(arg0 instanceof VclReference)) {
	arg0 = arg0.getReference();
}
targetEntityArg.updateStorageProfile(arg0);
}
}
