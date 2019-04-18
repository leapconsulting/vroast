/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getAllTagsForFilter(filter?: string): Array<string> {var freshServiceRest = nl.itq.freshservice.rest;
var freshService = nl.itq.freshservice;

var tag = freshService.getCiTypeByName("Tag");

var path = "cmdb/items/list.json";

var queryParameters = new Properties();
	queryParameters.put("field", "name");
	queryParameters.put("q", filter);

var response = freshServiceRest.doGetRequest(path,queryParameters,null,null);

var tagNames = response.config_items.map(function(asset) {
	return asset.name;
});

return tagNames;
}
}
