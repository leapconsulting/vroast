/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.vra {
export function requestCatalogItem(catalogItem?: vCACCAFE.CatalogItem, serverCpu?: number, serverMemory?: number, serverAdditionalDisks?: Array<any>, serverNetworkConfig?: any, serverCustomProperties?: Properties, instances?: number, requestedFor?: string, serverDescription?: string, serverReason?: string, leaseDays?: number, storagePolicy?: vCloud.VdcStorageProfile): vCACCAFE.CatalogItemRequest {var vra = be.itq.package.vra;
var cafe = com.vmware.library.vcaccafe.request;

//haalt een ProvisioningRequest op.
var requestTemplate = vra.getRequestTemplate(catalogItem,
						requestedFor,
						serverDescription,
						serverReason)
System.log("provisioning done");
// Haalt de JSON op voor het request template
var requestTemplateData = vCACCAFERequestsHelper.getProvisioningRequestData(requestTemplate);			
System.log("requestTemplateData done");
var provisioningRequestData = JSON.parse(requestTemplateData);
System.log("proviosioning done");

// vult de JSON aan met de benodigde waarden
var completedRequestTemplate = vra.completeRequestTemplate(provisioningRequestData,
						serverCpu,
						serverMemory,
						serverAdditionalDisks,
						serverNetworkConfig,
						serverCustomProperties,
						instances,
						storagePolicy,
						leaseDays)
						
System.log("complete request done");
var provisioningRequest = vCACCAFERequestsHelper.setProvisioningRequestData(requestTemplate, JSON.stringify(completedRequestTemplate));
System.log("provisioning request data done");
return cafe.requestCatalogItemWithProvisioningRequest(catalogItem, provisioningRequest);
}
}
