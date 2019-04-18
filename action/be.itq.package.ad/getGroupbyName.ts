/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ad {
export function getGroupbyName(groupName?: string): AD.UserGroup {var ad = nl.umcg.ad;
var host = ad.getHost();

var groups = ActiveDirectory.searchExactMatch("UserGroup" , groupName, 100 , host);
var group = groups.filter(function(group) {
	System.log(group.name + " - " + group.distinguishedName);
	return group;
})[0];

return group;
}
}
