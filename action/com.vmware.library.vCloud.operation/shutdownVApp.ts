/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function shutdownVApp(targetEntityArg?: vCloud.VApp): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.shutdown();
}
}
