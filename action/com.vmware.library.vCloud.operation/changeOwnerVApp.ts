/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function changeOwnerVApp(targetEntityArg?: vCloud.VApp, userRefArg?: any): void {// WARNING: Auto generated code. Please, do not edit this code.
if ((userRefArg != null) && !(userRefArg instanceof VclReference)) {
	userRefArg = userRefArg.getReference();
}
targetEntityArg.changeOwner(userRefArg);
}
}
