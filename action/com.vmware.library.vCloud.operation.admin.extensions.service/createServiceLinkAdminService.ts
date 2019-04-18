/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions.service {
export function createServiceLinkAdminService(targetEntityArg?: vCloud.AdminService, linkHrefArg?: string, relationArg?: string, resourceTypeArg?: string, mimeTypeArg?: string, resourceIdArg?: string): vCloud.AdminServiceLink {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.createServiceLink(linkHrefArg,relationArg,resourceTypeArg,mimeTypeArg,resourceIdArg);
}
}
