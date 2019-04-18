/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getOrgVAppsByName(orgVdc?: vCloud.Vdc, tenantRef?: string): Array<vCloud.VApp> {var dataModule = be.proximus.data;
var host = dataModule.getOrganization(tenantRef,"VCD");
host.login();
var org = host.getOrganizations();
var vapps = org[0].getVdcs().sort();
vapps = vapps.getvApps();
host.logout();
return vapps;
}
}
