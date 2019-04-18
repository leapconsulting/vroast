/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyVMWVdcTemplate(targetEntityArg?: vCloud.VmwVdcTemplate, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, tenantDescriptionArg?: string, tenantNameArg?: string, vdcTemplateSpecificationArg?: any): vCloud.VmwVdcTemplate {// WARNING: Auto generated code. Please, do not edit this code.
if (tenantNameArg != null) {
	targetEntityArg["tenantName"] = tenantNameArg;
}
if (vdcTemplateSpecificationArg != null) {
	targetEntityArg["vdcTemplateSpecification"] = vdcTemplateSpecificationArg;
}
if (tenantDescriptionArg != null) {
	targetEntityArg["tenantDescription"] = tenantDescriptionArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
return targetEntityArg;
}
}
