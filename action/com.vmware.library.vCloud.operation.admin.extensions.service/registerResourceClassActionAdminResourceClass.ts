/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions.service {
export function registerResourceClassActionAdminResourceClass(targetEntityArg?: vCloud.AdminResourceClass, actionNameArg?: string, actionHttpMethodArg?: string, actionURLPatternArg?: string, actionOperationKeyArg?: string): vCloud.AdminResourceClassAction {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.registerResourceClassAction(actionNameArg,actionHttpMethodArg,actionURLPatternArg,actionOperationKeyArg);
}
}
