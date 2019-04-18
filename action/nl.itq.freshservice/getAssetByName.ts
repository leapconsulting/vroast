/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getAssetByName(assetName?: string): any {var freshService = nl.itq.freshservice.rest;

var path = "/cmdb/items/list.json";
var queryParameters = new Properties();
	queryParameters.put("field", "name");
	queryParameters.put("q", assetName);

var response = freshService.doGetRequest(path,queryParameters,null,null);

if (response && response.config_items && response.config_items.length > 1) {
	return assetFound = response.config_items.filter(function(asset) {
		return asset.name == assetName;
	})[0];
} else if (response && response.config_items && response.config_items.length == 1) {
	return response.config_items[0];
}

return null;
}
}
