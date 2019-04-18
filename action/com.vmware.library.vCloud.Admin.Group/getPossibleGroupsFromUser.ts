/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Group {
export function getPossibleGroupsFromUser(user?: vCloud.User): Array<vCloud.Group> {if (user == null) {
	return new Array();
}
return user.parent.getGroups();
}
}
