/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function getUsersGroup(targetEntityArg?: vCloud.Group): Array<vCloud.User> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getUsers();
}
}
