/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getCatalogItems(__asd_tenantRef?: string): Array<string> {var vra = be.itq.package.vra

var host = vra.getHostForTenant(__asd_tenantRef)

// get all catalog items from vRA
var catalogItems = vCACCAFEEntitiesFinder.getCatalogItems(host);

var catalogNames = new Array();
for (var catItem of catalogItems){
	System.log("Catlog item is:" + catItem.name);
	catalogNames.push(catItem.name);
}
	return catalogNames;



}
}
