/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function getResourcePoolsVimServer(targetEntityArg?: vCloud.VimServer): Array<any> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getResourcePools();
}
}