/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function updateAsset(data?: any, assetId?: string): any {var freshService = nl.itq.freshservice.rest;

var path = "/cmdb/items/" + assetId + ".json";
var queryParameters = new Properties();
var headers = new Properties();

var response = freshService.doPutRequest(path,queryParameters,data,headers);

return response;
}
}
