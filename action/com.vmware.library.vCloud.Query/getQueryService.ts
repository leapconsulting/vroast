/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Query {
export function getQueryService(vcdHost?: vCloud.Host): any {if (vcdHost == null) {
	return null;
}
return vcdHost.getQueryService();
}
}
