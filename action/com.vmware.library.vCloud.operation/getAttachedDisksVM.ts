/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function getAttachedDisksVM(targetEntityArg?: vCloud.VM): Array<vCloud.Disk> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getAttachedDisks();
}
}
