/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function getVMCustomParameterList(VM?: vCloud.VM): Array<string> {var resultList = new Array();
if ( VM == null ) {
	return resultList;
}
var productSections = VM.getProductSections();
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
