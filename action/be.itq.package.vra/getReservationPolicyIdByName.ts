/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.vra {
export function getReservationPolicyIdByName(tenantName?: string, reservationPolicyName?: string): string {var vra = be.itq.package.vra;

var vraHost = vra.getHostForTenant(tenantName);

var reservationClient = vraHost.createReservationClient()
var reservationPolicyService = reservationClient.getReservationReservationPolicyService()

var allReservationPolicies = reservationPolicyService.getAllReservationPolicies();
var allReservationPoliciesContent = allReservationPolicies.getContent();

var foundPolicies = allReservationPoliciesContent.filter(function(content) {
	return content.getName() == reservationPolicyName;
});

var reservationPolicy;
if (foundPolicies.length != 1) {
	throw "Zero or Multiple reservationPolicies found"
} else {
	reservationPolicy = foundPolicies[0];
}

return reservationPolicy.id;
}
}
