/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition {
export function getScopeIDFromName(connection?: NSX.Connection, scopeName?: string): string {scopes=NSXVdnScopeManager.getVdnScopes(connection);
for (var scope of scopes) {
	if (scope.name == scopeName){
		return scope.objectId;
	}
}

}
}
