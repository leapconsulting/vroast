/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function uploadVappTemplateCatalog(targetEntityArg?: vCloud.Catalog, vAppTemplateNameArg?: string, vAppTemplateDescArg?: string, localOvfFileLocationArg?: string, manifestRequiredArg?: boolean, vdcStorageRefArg?: any): vCloud.VAppTemplate {// WARNING: Auto generated code. Please, do not edit this code.
if ((vdcStorageRefArg != null) && !(vdcStorageRefArg instanceof VclReference)) {
	vdcStorageRefArg = vdcStorageRefArg.getReference();
}
return targetEntityArg.uploadVappTemplate(vAppTemplateNameArg,vAppTemplateDescArg,localOvfFileLocationArg,manifestRequiredArg,vdcStorageRefArg);
}
}
