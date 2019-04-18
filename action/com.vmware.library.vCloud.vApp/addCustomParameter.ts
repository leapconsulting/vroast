/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function addCustomParameter(productSections?: Array<any>, parameterKey?: string, parameterDescription?: string, parameterType?: string, parameterLabel?: string, userConfigurable?: boolean, defaultValue?: any): Array<any> {if ( 0 == productSections.length ) {
	// Create new product section if does not exists
	var newSection = new VclProductSection() ;
	newSection.info = com.vmware.library.vCloud.common.createOvfMsg(null,"ProductSection");
	productSections[0] = newSection;

}

for (var productSection of productSections) {
	var catList = productSection.categoryOrProperty;
	var elements = catList.find(new VclProductSectionProperty()) ;
	for (var itmId in elements ) {
		var cat = elements[itmId];
		if ( cat.key == parameterKey ) {
			throw "Parameter " + parameterKey + " already exists!";
		}
	}
	var newProperty = new VclProductSectionProperty() ;
	newProperty.key = parameterKey;
	newProperty.type = parameterType;
	var label = new VclMsg() ;
	label.value = parameterLabel;
	newProperty.label = label;
	newProperty.valueAttrib = defaultValue;
	newProperty.userConfigurable = userConfigurable;
	var description = new VclMsg() ;
	description.value = parameterDescription;
	newProperty.description = description;

	catList.add ( newProperty );
}
return productSections;
}
}
