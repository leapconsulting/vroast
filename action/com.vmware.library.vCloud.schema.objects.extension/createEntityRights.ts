/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createEntityRights(referenceArg?: any, rightsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclEntityRights();
result["rights"] = rightsArg;
var value = new VclObject();
if ((referenceArg == null) || (referenceArg instanceof VclReference)) {
	value.setValue(referenceArg);
} else {
	value.setValue(referenceArg.getReference();
}
result["reference"] = value;
return result;
}
}
