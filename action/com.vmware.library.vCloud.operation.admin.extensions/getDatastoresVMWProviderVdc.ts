/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function getDatastoresVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): Array<vCloud.VmwDatastore> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getDatastores();
}
}
