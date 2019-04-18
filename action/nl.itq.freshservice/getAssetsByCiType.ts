/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getAssetsByCiType(ciTypeName?: string, filter?: string): Array<string> {var freshService = nl.itq.freshservice

var citype = freshService.getCiTypeByName(ciTypeName);
var ciTypeId = citype.id;

var assets = freshService.getAllAssetsForType(ciTypeId)
System.log(JSON.stringify(assets,null,2));

if (filter != null && filter.trim().length  > 0 ){
	return assets.filter(function(asset) {
		return asset.type_fields["status_" + ciTypeId] == "In use" && asset.name.toLowerCase().indexOf(filter.toLowerCase()) != -1;
	}).map(function(asset) {
		return asset.name;
	});

}
else{
	return assets.filter(function(asset) {
		return asset.type_fields["status_" + ciTypeId] == "In use";
	}).map(function(asset) {
		return asset.name;
	});
}


}
}
