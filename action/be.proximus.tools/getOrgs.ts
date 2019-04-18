/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.tools {
export function getOrgs(vcdHost?: vCloud.Host): Array<vCloud.Organization> {if (vcdHost == null) {
	return null;
}
return vcdHost.getOrganizations()[0];
}
}
