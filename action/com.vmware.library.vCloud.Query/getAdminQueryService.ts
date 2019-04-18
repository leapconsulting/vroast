/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Query {
export function getAdminQueryService(vcdHost?: vCloud.Host): any {if (vcdHost == null) {
	return null;
}
return vcdHost.toAdminObject().getAdminQueryService();
}
}
