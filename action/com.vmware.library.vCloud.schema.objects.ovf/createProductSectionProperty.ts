/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createProductSectionProperty(descriptionArg?: any, keyArg?: string, labelArg?: any, passwordArg?: boolean, qualifiersArg?: string, userConfigurableArg?: boolean, valueAttribArg?: string, valueElementArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclProductSectionProperty();
result["password"] = passwordArg;
result["label"] = labelArg;
var items = result["valueElement"];
for (var obj of valueElementArg) {
	items.add(obj);
}
result["qualifiers"] = qualifiersArg;
result["userConfigurable"] = userConfigurableArg;
result["valueAttrib"] = valueAttribArg;
result["key"] = keyArg;
result["description"] = descriptionArg;
return result;
}
}
