/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Media {
export function updateMedia(media?: vCloud.Media, name?: string, description?: string, strorageProfile?: vCloud.VdcStorageProfile): vCloud.Task {media.name = name;
media.description = description;
if (strorageProfile != null) {
	media.vdcStorageProfile = strorageProfile.getReference();
}
return media.update();
}
}
