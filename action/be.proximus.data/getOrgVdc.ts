/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getOrgVdc(tenantRef?: string): vCloud.Vdc {var dataModule = be.proximus.data;
var host = dataModule.getOrganization(tenantRef,"VCD");
host.login();
var vdc = host.getOrganizations()[0].getVdcs().sort();
host.logout();
return vdc[0];

}
}
