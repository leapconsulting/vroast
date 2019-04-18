/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.vra {
export function getRequestTemplate(catalogItem?: vCACCAFE.CatalogItem, requestedFor?: string, serverDescription?: string, serverReason?: string): any {var provisioningRequest = vCACCAFERequestsHelper.getProvisioningRequestForCatalogItem(catalogItem);
System.log("get provisioning request done");
provisioningRequest.setDescription(serverDescription);
System.log("set description done");
provisioningRequest.setReasons(serverReason);
System.log("set reasons done");
if(requestedFor){
	provisioningRequest.setRequestedFor(requestedFor);
	System.log("set request for done");
}

provisioningRequest.setBusinessGroupId(catalogItem.getOrganization().getSubtenantRef());
System.log("set business group id done");
return provisioningRequest;
}
}
