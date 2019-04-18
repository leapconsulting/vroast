/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Role {
export function getPossibleRolesFromOrganization(organization?: vCloud.Organization): Array<vCloud.Role> {if (organization == null) {
	return new Array();
}
var roles = organization.parent.toAdminObject().getRoles();
var result = new Array();
for (var i = 0; i < roles.length; i++) {
	if (roles[i].name != "System Administrator") {
		result.push(roles[i]);
	}
}
return result;
}
}
