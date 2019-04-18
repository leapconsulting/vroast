/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function removeCustomParameter(productSections?: Array<any>, parameterKey?: string): Array<any> {for (var productSection of productSections) {
	var catList = productSection.categoryOrProperty;
	var elements = catList.find(new VclProductSectionProperty()) ;
	for (var itmId in elements ) {
		var cat = elements[itmId];
		if ( cat.key == parameterKey ) {
			catList.remove(catList.indexOf ( cat ));
			return productSections;
		}
	}
}
throw "Custom parameter \"" + parameterKey + "\" does not exist.";
}
}
