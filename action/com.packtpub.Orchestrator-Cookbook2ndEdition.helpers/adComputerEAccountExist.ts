/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition.helpers {
export function adComputerEAccountExist(container?: AD.Group, computerName?: string): boolean {computers = container.computers;
for (var index in computers) {
	if (computers[index].name.toLowerCase() == computerName.toLowerCase()) {
		return true;
	}
}
return false;
}
}
