/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function relocateVM(targetEntityArg?: vCloud.VM, datastoreArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
if ((datastoreArg != null) && !(datastoreArg instanceof VclReference)) {
	datastoreArg = datastoreArg.getReference();
}
return targetEntityArg.relocate(datastoreArg);
}
}
