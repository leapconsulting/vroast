/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getAllAssetsForType(ciTypeId?: string): Array<string> {var freshServiceRest = nl.itq.freshservice.rest;
var freshService = nl.itq.freshservice;

var tag = freshService.getCiTypeByName("Tag");

var path = "api/v2/assets";

var queryParameters = new Properties();
	queryParameters.put("include", "type_fields");
	queryParameters.put("query", "\"asset_type_id : " + ciTypeId + "\"");



var response = freshServiceRest.doGetRequest(path,queryParameters,null,null);

return response.assets;
}
}
