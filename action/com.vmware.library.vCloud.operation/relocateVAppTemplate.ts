/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function relocateVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, datastoreRefArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
if ((datastoreRefArg != null) && !(datastoreRefArg instanceof VclReference)) {
	datastoreRefArg = datastoreRefArg.getReference();
}
return targetEntityArg.relocate(datastoreRefArg);
}
}
