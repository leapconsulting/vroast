/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getAssetRelationShipByAssetId(assetId?: string): any {var freshService = nl.itq.freshservice.rest;
var tools = be.itq.package.tools;

var stringUtils = tools.getStringUtils();

var path = stringUtils.format("/cmdb/items/{0}/relationships.json", assetId);

var queryParameters = new Properties();
var headers = new Properties();

var response = freshService.doGetRequest(path,queryParameters,null,headers);

return response;
}
}
