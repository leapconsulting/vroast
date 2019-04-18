/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function undeployVApp(targetEntityArg?: vCloud.VApp, undeployPowerActionTypeArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.undeploy(undeployPowerActionTypeArg);
}
}
