/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function getCatalogControlAccessByReferenceOrg(targetEntityArg?: vCloud.Organization, catalogArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
if ((catalogArg != null) && !(catalogArg instanceof VclReference)) {
	catalogArg = catalogArg.getReference();
}
return targetEntityArg.getCatalogControlAccessByReference(catalogArg);
}
}
