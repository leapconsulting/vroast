/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Media {
export function uploadMedia(vdc?: vCloud.Vdc, name?: string, description?: string, imageType?: vCloud.ImageType, storageProfile?: vCloud.VdcStorageProfile, filename?: string): vCloud.Media {if (storageProfile != null) {
	return vdc.uploadMedia(name, description, imageType, storageProfile.getReference(), filename);
}
return vdc.uploadMedia(name, description, imageType, null, filename);
}
}
