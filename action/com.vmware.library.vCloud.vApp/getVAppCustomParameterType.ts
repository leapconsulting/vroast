/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function getVAppCustomParameterType(vApp?: vCloud.VApp, parameterKey?: string): Array<string> {var result = new Array();
if ((!vApp) || !(parameterKey)) {
	return result;
}
var productSections = vApp.getProductSections();
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
