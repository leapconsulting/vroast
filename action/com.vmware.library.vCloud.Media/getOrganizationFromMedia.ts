/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Media {
export function getOrganizationFromMedia(media?: vCloud.Media): vCloud.Organization {return media.parent.parent;
}
}
