/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Group {
export function getPossibleGroupsFromOrganization(organization?: vCloud.Organization): Array<vCloud.Group> {if (organization == null) {
	return new Array();
}
return organization.toAdminObject().getGroups();
}
}
