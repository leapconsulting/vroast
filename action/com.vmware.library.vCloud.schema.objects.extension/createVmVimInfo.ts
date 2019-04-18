/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVmVimInfo(datastoreVimObjectRefArg?: any, hostVimObjectRefArg?: any, virtualDisksMaxChainLengthArg?: number, vmVimObjectRefArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVmVimInfo();
result["vmVimObjectRef"] = vmVimObjectRefArg;
result["datastoreVimObjectRef"] = datastoreVimObjectRefArg;
result["hostVimObjectRef"] = hostVimObjectRefArg;
result["virtualDisksMaxChainLength"] = virtualDisksMaxChainLengthArg;
return result;
}
}
