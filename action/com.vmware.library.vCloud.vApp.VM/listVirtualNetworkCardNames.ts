/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function listVirtualNetworkCardNames(vm?: vCloud.VM): Array<string> {var nics = vm.getNetworkCards();
var names = new Array();
for (var i = 0; i < nics.length; i++) {	
	names.push(nics[i].itemResource.elementName.value);	
}
return names;
}
}
