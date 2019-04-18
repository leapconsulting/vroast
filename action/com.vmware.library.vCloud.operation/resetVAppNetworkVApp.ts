/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function resetVAppNetworkVApp(targetEntityArg?: vCloud.VApp, networkNameArg?: string): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.resetVAppNetwork(networkNameArg);
}
}
