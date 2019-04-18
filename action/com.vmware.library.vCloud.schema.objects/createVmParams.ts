/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVmParams(dateCreatedArg?: any, deployedArg?: boolean, descriptionArg?: string, environmentArg?: any, filesArg?: any, nameArg?: string, needsCustomizationArg?: boolean, nestedHypervisorEnabledArg?: boolean, operationKeyArg?: string, sectionArg?: Array<any>, statusArg?: number, storageProfileArg?: any, vAppParentArg?: any, vAppScopedLocalIdArg?: string, vmCapabilitiesArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVmParams();
result["environment"] = environmentArg;
result["vAppScopedLocalId"] = vAppScopedLocalIdArg;
if ((storageProfileArg == null) || (storageProfileArg instanceof VclReference)) {
	result["storageProfile"] = storageProfileArg;
} else {
	result["storageProfile"] = storageProfileArg.getReference();
}
result["vmCapabilities"] = vmCapabilitiesArg;
result["nestedHypervisorEnabled"] = nestedHypervisorEnabledArg;
result["needsCustomization"] = needsCustomizationArg;
if ((vAppParentArg == null) || (vAppParentArg instanceof VclReference)) {
	result["vAppParent"] = vAppParentArg;
} else {
	result["vAppParent"] = vAppParentArg.getReference();
}
result["operationKey"] = operationKeyArg;
var items = result["section"];
for (var obj of sectionArg) {
	items.add(obj);
}
result["deployed"] = deployedArg;
result["dateCreated"] = dateCreatedArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["files"] = filesArg;
return result;
}
}
