/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createUsersList(users?: Array<vCloud.User>): any {var usersList = new VclUsersList();
if (users != null) {
	for (var i = 0; i < users.length; i++) {
		usersList.userReference.add(users[i].getReference());
	}	
}
return usersList;
}
}
