/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getCiTypeByName(ciTypeName?: string): any {var freshService = nl.itq.freshservice.rest;

var path = "/cmdb/ci_types.json";
var queryParameters = new Properties();

var response = freshService.doGetRequest(path,queryParameters,null,null);

if (!response || response.length <= 1) {
	throw "No CI Types found in FreshService";
}

var foundType = response.filter(function(ciType) {
	return ciType.label == ciTypeName;
})[0];

if (!foundType) {
	throw "No CI Type found in FreshService for TypeName: " + ciTypeName;
}

return foundType;
}
}
