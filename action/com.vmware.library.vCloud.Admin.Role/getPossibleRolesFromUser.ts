/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Role {
export function getPossibleRolesFromUser(user?: vCloud.User): Array<vCloud.Role> {if (user == null) {
	return new Array();
}
var organization = user.parent.toUserObject();
return com.vmware.library.vCloud.Admin.Role.getPossibleRolesFromOrganization(organization);
}
}
