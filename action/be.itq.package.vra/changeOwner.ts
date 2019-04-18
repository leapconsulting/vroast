/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.vra {
export function changeOwner(host?: vCACCAFE.VCACHost, resourceId?: string, newOwner?: string): vCACCAFE.ResourceActionRequest {if (!host) {
	throw "'host' dient gevuld te zijn";
}

if (!resourceId) {
	throw "'resourceId' dient gevuld te zijn";
}

if (!newOwner) {
	throw "'newOwner' dient gevuld te zijn";
}


var client = host.createCatalogClient();
var service = client.getCatalogConsumerResourceService();

var resource = service.getResource(resourceId);

if (!resource) {
	throw "De resource in vRA kon niet gevonden worden, id '" + resourceId + "'";
}

var operationName = "Change Owner";
System.log("Found resource. Fetching operation '" + operationName + "'...");
var operation = vCACCAFEEntitiesFinder.findCatalogResourceActions(resource, operationName)[0];

if (!operation) {
	System.log("Operation not found for '" + resource.name + "', returning null.");
	return null;
}

var requestTemplate = vCACCAFERequestsHelper.getRequestForResourceAction(operation)
var jsonData = vCACCAFERequestsHelper.getResourceActionRequestData(requestTemplate);
var json = JSON.parse(jsonData);
json["provider-NewOwner"] = {"type":"entityRef", "classId":"principal", "id":newOwner, "label":""};

vCACCAFERequestsHelper.setResourceActionRequestData(requestTemplate, JSON.stringify(json));

System.log("Requesting '" + operationName + "'...");
var changeOwnerRequest = com.vmware.library.vcaccafe.request.requestResourceActionWithRequestTemplate(operation, requestTemplate);
System.log("Submitted request to change owner of '" + resourceId + "' to '" + newOwner + "'");

return changeOwnerRequest;

}
}
