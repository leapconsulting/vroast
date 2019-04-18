/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function updateDiskDisk(targetEntityArg?: vCloud.Disk, nameArg?: string, descriptionArg?: string, storageProfileArg?: vCloud.VdcStorageProfile): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateDisk(nameArg,descriptionArg,storageProfileArg);
}
}
