/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function uploadMediaVdc(targetEntityArg?: vCloud.Vdc, nameArg?: string, descriptionArg?: string, imageTypeArg?: any, storageProfileArg?: any, filenameArg?: string): vCloud.Media {// WARNING: Auto generated code. Please, do not edit this code.
if ((storageProfileArg != null) && !(storageProfileArg instanceof VclReference)) {
	storageProfileArg = storageProfileArg.getReference();
}
return targetEntityArg.uploadMedia(nameArg,descriptionArg,imageTypeArg,storageProfileArg,filenameArg);
}
}
