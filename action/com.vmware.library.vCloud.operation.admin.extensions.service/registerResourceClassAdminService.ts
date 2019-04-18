/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions.service {
export function registerResourceClassAdminService(targetEntityArg?: vCloud.AdminService, nameArg?: string, typeArg?: string, nidArg?: string, urlTemplateArg?: string, urnPatternArg?: string, mimeTypeArg?: string): vCloud.AdminResourceClass {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.registerResourceClass(nameArg,typeArg,nidArg,urlTemplateArg,urnPatternArg,mimeTypeArg);
}
}
