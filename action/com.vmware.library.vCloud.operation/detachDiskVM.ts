/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function detachDiskVM(targetEntityArg?: vCloud.VM, diskArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
if ((diskArg != null) && !(diskArg instanceof VclReference)) {
	diskArg = diskArg.getReference();
}
return targetEntityArg.detachDisk(diskArg);
}
}
