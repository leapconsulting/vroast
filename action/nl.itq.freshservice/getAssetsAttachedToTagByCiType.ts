/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getAssetsAttachedToTagByCiType(tagName?: string, ciTypeName?: string): Array<string> {var freshService = nl.itq.freshservice

var citype = freshService.getCiTypeByName(ciTypeName);
var ciTypeId = citype.id;

var asset = freshService.getAssetByName(tagName)
System.log(JSON.stringify(asset,null,2));
var topAssetName = asset.name;

var relationships = freshService.getAssetRelationShipByAssetId(asset.display_id)

var relationshipObjects = relationships.relationships.map(function(relationShip) {
	var relationshipId = relationShip.id;
	var foundAsset = freshService.getAssetById(relationShip.config_item.display_id);
	System.log("Asset '" + topAssetName + "' is connected to: " + foundAsset.config_item.name);
	return foundAsset;
});

return relationshipObjects.filter(function(asset) {
	return asset.config_item.ci_type_id == ciTypeId && asset.config_item.levelfield_values["status_" + ciTypeId] == "In use";
}).map(function(asset) {
	return asset.config_item.name;
});


}
}
