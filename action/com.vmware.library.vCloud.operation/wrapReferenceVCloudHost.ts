/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function wrapReferenceVCloudHost(targetEntityArg?: vCloud.Host, entityTypeArg?: string, referenceArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
if ((referenceArg != null) && !(referenceArg instanceof VclReference)) {
	referenceArg = referenceArg.getReference();
}
return targetEntityArg.wrapReference(entityTypeArg,referenceArg);
}
}
