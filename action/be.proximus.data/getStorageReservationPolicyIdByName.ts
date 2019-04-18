/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getStorageReservationPolicyIdByName(__asd_tenantRef?: string, storageReservationPolicy?: string): string {var vra = be.itq.package.vra

var host = vra.getHostForTenant(__asd_tenantRef);

var reservationClient = host.createReservationClient();
var rps = reservationClient.getReservationReservationPolicyService()
var reservationPolicies = rps.getAllReservationPolicies();

var content = reservationPolicies.content;

return content.filter(function(rp) {
	return rp.name == storageReservationPolicy;
}).map(function(rp) {
	return rp.id;
})[0];
}
}
