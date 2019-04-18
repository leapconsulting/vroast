/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function setCustomParameterValue(productSections?: Array<any>, parameterKey?: string, value?: any): Array<any> {for (var productSection of productSections) {
	var catList = productSection.categoryOrProperty;
	var elements = catList.find(new VclProductSectionProperty()) ;
	for (var itmId in elements ) {
		var cat = elements[itmId];
		if ( cat.key == parameterKey ) {
			cat.valueAttrib = value;
		}
	}
}
return productSections;
}
}
