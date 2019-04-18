/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyVm(targetEntityArg?: vCloud.VM, dateCreatedArg?: any, deployedArg?: boolean, descriptionArg?: string, environmentArg?: any, nameArg?: string, needsCustomizationArg?: boolean, nestedHypervisorEnabledArg?: boolean, operationKeyArg?: string, storageProfileArg?: any, vAppParentArg?: any, vAppScopedLocalIdArg?: string, vmCapabilitiesArg?: any): vCloud.VM {// WARNING: Auto generated code. Please, do not edit this code.
if (environmentArg != null) {
	targetEntityArg["environment"] = environmentArg;
}
if (vAppScopedLocalIdArg != null) {
	targetEntityArg["vAppScopedLocalId"] = vAppScopedLocalIdArg;
}
if (storageProfileArg != null) {
	if (storageProfileArg instanceof VclReference) {
	    targetEntityArg["storageProfile"] = storageProfileArg;
	} else {
	    targetEntityArg["storageProfile"] = storageProfileArg.getReference();
	}
}
if (vmCapabilitiesArg != null) {
	targetEntityArg["vmCapabilities"] = vmCapabilitiesArg;
}
if (nestedHypervisorEnabledArg != null) {
	targetEntityArg["nestedHypervisorEnabled"] = nestedHypervisorEnabledArg;
}
if (needsCustomizationArg != null) {
	targetEntityArg["needsCustomization"] = needsCustomizationArg;
}
if (vAppParentArg != null) {
	if (vAppParentArg instanceof VclReference) {
	    targetEntityArg["vAppParent"] = vAppParentArg;
	} else {
	    targetEntityArg["vAppParent"] = vAppParentArg.getReference();
	}
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (deployedArg != null) {
	targetEntityArg["deployed"] = deployedArg;
}
if (dateCreatedArg != null) {
	targetEntityArg["dateCreated"] = dateCreatedArg;
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
