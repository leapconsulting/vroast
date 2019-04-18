/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWVdcTemplateParams(descriptionArg?: string, nameArg?: string, operationKeyArg?: string, providerVdcReferenceArg?: Array<any>, tenantDescriptionArg?: string, tenantNameArg?: string, vdcTemplateSpecificationArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWVdcTemplateParams();
result["tenantName"] = tenantNameArg;
var items = result["providerVdcReference"];
for (var obj of providerVdcReferenceArg) {
	items.add(obj);
}
var value = new VclAbstractValueObject();
value.setValue(vdcTemplateSpecificationArg);
result["vdcTemplateSpecification"] = value;
result["tenantDescription"] = tenantDescriptionArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
