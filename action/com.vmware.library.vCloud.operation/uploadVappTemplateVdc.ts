/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function uploadVappTemplateVdc(targetEntityArg?: vCloud.Vdc, nameArg?: string, descriptionArg?: string, ovfFilePathArg?: string, manifestRequiredArg?: boolean, storageProfileArg?: any, catalogArg?: any): vCloud.VAppTemplate {// WARNING: Auto generated code. Please, do not edit this code.
if ((storageProfileArg != null) && !(storageProfileArg instanceof VclReference)) {
	storageProfileArg = storageProfileArg.getReference();
}
if ((catalogArg != null) && !(catalogArg instanceof VclReference)) {
	catalogArg = catalogArg.getReference();
}
return targetEntityArg.uploadVappTemplate(nameArg,descriptionArg,ovfFilePathArg,manifestRequiredArg,storageProfileArg,catalogArg);
}
}
