/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function updateVmAffinity(targetEntityArg?: vCloud.VmAffinity, vmAffinityRuleArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.update(vmAffinityRuleArg);
}
}
