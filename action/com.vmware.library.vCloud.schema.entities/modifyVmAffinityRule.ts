/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyVmAffinityRule(targetEntityArg?: vCloud.VmAffinity, isEnabledArg?: boolean, isMandatoryArg?: boolean, nameArg?: string, operationKeyArg?: string, polarityArg?: string, scopeArg?: string, vmReferencesArg?: any): vCloud.VmAffinity {// WARNING: Auto generated code. Please, do not edit this code.
if (scopeArg != null) {
	targetEntityArg["scope"] = scopeArg;
}
if (isEnabledArg != null) {
	targetEntityArg["isEnabled"] = isEnabledArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (vmReferencesArg != null) {
	targetEntityArg["vmReferences"] = vmReferencesArg;
}
if (isMandatoryArg != null) {
	targetEntityArg["isMandatory"] = isMandatoryArg;
}
if (polarityArg != null) {
	targetEntityArg["polarity"] = polarityArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
return targetEntityArg;
}
}
