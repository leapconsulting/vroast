/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.service {
export function deactivateService(service?: vCACCAFE.Service): void {var host = vCACCAFEEntitiesFinder.getHostForEntity(service);
var client = host.createCatalogClient().getCatalogServiceAdminService();

service.setStatus(vCACCAFEStatus.RETIRED);

System.log("Deactivating service...");
client.updateService(service);
System.log("Service: " + service.getName() + " deactivated.");
}
}
