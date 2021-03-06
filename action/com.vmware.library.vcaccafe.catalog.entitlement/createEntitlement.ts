/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.entitlement {
export function createEntitlement(host?: vCACCAFE.VCACHost, name?: string, description?: string, businessGroup?: vCACCAFE.BusinessGroup, expirationDate?: Date, isActive?: boolean): vCACCAFE.Entitlement {com.vmware.library.vcaccafe.util.checkHosts(host, businessGroup, "host", "business group");
var client = host.createCatalogClient().getCatalogEntitlementService();

var entitlement = new vCACCAFEEntitlement() ;
entitlement.setName(name);
entitlement.setDescription(description);

var organization = new vCACCAFECatalogOrganizationReference() ;
organization.setTenantRef(businessGroup.getTenantId());
organization.setSubtenantRef(businessGroup.getId());
if (expirationDate != null) {
	entitlement.setExpiryDate(expirationDate);
}
if (isActive) {
	entitlement.setStatus(vCACCAFEEntitlementStatus.ACTIVE);
} else {
	entitlement.setStatus(vCACCAFEEntitlementStatus.DRAFT);
}

entitlement.setOrganization(organization);
System.log("Creating entitlement: " + entitlement.getName() + "...");
var uri = client.create(entitlement);
System.log("Entitlement: " + entitlement.getName() + " created.");
var uriString = uri.toString();
var uriParts = uriString.split("/");
var entitlementId = uriParts[uriParts.length - 1];
return vCACCAFEEntitiesFinder.getEntitlement(host, entitlementId);

}
}
