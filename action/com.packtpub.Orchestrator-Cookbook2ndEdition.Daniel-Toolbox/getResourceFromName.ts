/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition.Daniel-Toolbox {
export function getResourceFromName(name?: string): ResourceElement {allresource=Server.getAllResourceElementCategories();
for (var category of allresource) {
	for (var resource of category.resourceElements){
		if (resource.name ==resoruceName ){
			return resource;
			break;
		}
	}
}

}
}
