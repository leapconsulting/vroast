/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function addOrCreateUser(emailAddress?: string, departmentId?: string): string {var freshService = nl.itq.freshservice

var user = freshService.getUserByEmail(emailAddress);

if (!user) {
	var createdUser = freshService.createUser(emailAddress,emailAddress, departmentId)
	System.debug(JSON.stringify(createdUser,null,2));
	return createdUser.user.id
} else {
	System.debug(JSON.stringify(user,null,2));
	return user.user.id;
}
}
}
