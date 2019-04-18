/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getAllTagNames(): Array<string> {var freshServiceRest = nl.itq.freshservice.rest;
var freshService = nl.itq.freshservice;

var tag = freshService.getCiTypeByName("Tag");

var path = "api/v2/assets";
//var path = "cmdb/ci_types.json";

var queryParameters = new Properties();
	//queryParameters.put("query", tag.id );

	queryParameters.put("include", "type_fields");
	queryParameters.put("query", "\"asset_type_id : " + tag.id  + "\"");
//	queryParameters.put("query", "\"asset_type_id : " + tag.id + "\"");



var response = freshServiceRest.doGetRequest(path,queryParameters,null,null);
var tagNames = response.assets.map(function(asset) {
	return asset.name;
});

return tagNames;
}
}
