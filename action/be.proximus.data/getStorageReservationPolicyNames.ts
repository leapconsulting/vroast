/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getStorageReservationPolicyNames(__asd_tenantRef?: string): Array<string> {var vra = be.itq.package.vra

var host = vra.getHostForTenant(__asd_tenantRef);

var reservationClient = host.createReservationClient();
var rps = reservationClient.getReservationReservationPolicyService()
var reservationPolicies = rps.getAllReservationPolicies();

var content = reservationPolicies.content;

return content.filter(function(rp) {
	return rp.reservationPolicyTypeId == "Infrastructure.Reservation.Policy.Storage";
}).map(function(rp) {
	return rp.name;
});
}
}
