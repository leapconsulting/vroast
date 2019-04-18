/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSourcedCompositionItemParam(instantiationParamsArg?: any, networkAssignmentArg?: Array<any>, sourceArg?: any, sourceDeleteArg?: boolean, storageProfileArg?: any, vAppScopedLocalIdArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSourcedCompositionItemParam();
if ((sourceArg == null) || (sourceArg instanceof VclReference)) {
	result["source"] = sourceArg;
} else {
	result["source"] = sourceArg.getReference();
}
result["vAppScopedLocalId"] = vAppScopedLocalIdArg;
if ((storageProfileArg == null) || (storageProfileArg instanceof VclReference)) {
	result["storageProfile"] = storageProfileArg;
} else {
	result["storageProfile"] = storageProfileArg.getReference();
}
result["instantiationParams"] = instantiationParamsArg;
result["sourceDelete"] = sourceDeleteArg;
var items = result["networkAssignment"];
for (var obj of networkAssignmentArg) {
	items.add(obj);
}
return result;
}
}
