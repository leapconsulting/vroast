/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function getVAppCustomParameterList(vApp?: vCloud.VApp): Array<string> {var resultList = new Array();
if ( vApp == null ) {
	return resultList;
}
var productSections = vApp.getProductSections();
for (var productSection of productSections) {
	var catList = productSection.categoryOrProperty;
	var elements = catList.find(new VclProductSectionProperty()) ;
	for (var itmId in elements ) {
		resultList [resultList.length] =  elements[itmId].key;
	}
}
return resultList;
}
}
