/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function createAsset(data?: any): any {var freshService = nl.itq.freshservice.rest;

var path = "/cmdb/items.json";
var queryParameters = new Properties();
var headers = new Properties();

var response = freshService.doPostRequest(path,queryParameters,data,headers);

return response;
}
}
