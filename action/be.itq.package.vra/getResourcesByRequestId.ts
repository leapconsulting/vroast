/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.vra {
export function getResourcesByRequestId(host?: vCACCAFE.VCACHost, requestId?: string): Array<vCACCAFE.CatalogResource> {var catalogClient = host.createCatalogClient();

var catalogConsumerService = catalogClient.getCatalogConsumerRequestService();

var pagedResources = catalogConsumerService.getResourcesProvisionedByRequest(requestId,null);

return pagedResources.getContent();


}
}
