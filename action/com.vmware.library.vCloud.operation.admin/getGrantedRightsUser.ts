/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function getGrantedRightsUser(targetEntityArg?: vCloud.User): Array<vCloud.Right> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getGrantedRights();
}
}
