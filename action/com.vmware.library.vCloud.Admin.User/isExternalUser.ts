/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.User {
export function isExternalUser(user?: vCloud.User): boolean {return user.isExternal;
}
}
