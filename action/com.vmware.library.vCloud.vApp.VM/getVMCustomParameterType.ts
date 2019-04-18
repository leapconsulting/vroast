/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function getVMCustomParameterType(VM?: vCloud.VM, parameterKey?: string): Array<string> {var result = new Array();
if ((!VM) || (!parameterKey)) {
	return result;
}
var productSections = VM.getProductSections();
for (var productSection of productSections) {
	var catList = productSection.categoryOrProperty;
	var elements = catList.find(new VclProductSectionProperty()) ;
	for (var itmId in elements ) {
		var cat = elements[itmId];
		if ( cat.key == parameterKey ) {
			result [0] = cat.type;
			return result;
		}
	}
}
return result;
}
}
