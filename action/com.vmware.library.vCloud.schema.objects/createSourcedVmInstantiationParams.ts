/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSourcedVmInstantiationParams(hardwareCustomizationArg?: any, localityParamsArg?: any, sourceArg?: any, storageProfileArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSourcedVmInstantiationParams();
if ((sourceArg == null) || (sourceArg instanceof VclReference)) {
	result["source"] = sourceArg;
} else {
	result["source"] = sourceArg.getReference();
}
if ((storageProfileArg == null) || (storageProfileArg instanceof VclReference)) {
	result["storageProfile"] = storageProfileArg;
} else {
	result["storageProfile"] = storageProfileArg.getReference();
}
result["hardwareCustomization"] = hardwareCustomizationArg;
result["localityParams"] = localityParamsArg;
return result;
}
}
