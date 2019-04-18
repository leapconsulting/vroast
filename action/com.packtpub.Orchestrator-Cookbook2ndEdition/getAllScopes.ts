/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition {
export function getAllScopes(connection?: NSX.Connection): Array<string> {var scopelist = new Array();
scopes=NSXVdnScopeManager.getVdnScopes(connection);
for (var scope of scopes) {
	scopelist.push(scope.name);
}
return scopelist;
}
}
