/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ad {
export function findUsersInAd(query?: string): Array<string> {var host = nl.umcg.ad.getHost()

var users = ActiveDirectory.search("User" , query , host);

return users.map(function(user) {
	return user.name + " | " + user.accountName;
});
}
}
