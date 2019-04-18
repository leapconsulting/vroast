/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function createAssetRelationship(data?: any, assetId?: string): any {var freshService = nl.itq.freshservice.rest;

var path = "/cmdb/items/" + assetId + "/associate.json";
var queryParameters = new Properties();
var headers = new Properties();

var response = freshService.doPostRequest(path,queryParameters,data,headers);

return response;
}
}
