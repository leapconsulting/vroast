/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.freshservice.rest {
export function doGetRequest(path?: string, queryParameters?: Properties): any {var rest = be.itq.package.rest;
var tools = be.itq.package.tools;


var ce = tools.getConfigurationElement("freshservice");

if (!path) {
	throw "Variable 'path' has not been set";
}

var baseUrl = ce.getAttributeWithKey("baseUrl").value;
var credentials = {
	username : ce.getAttributeWithKey("username").value,
	password : ce.getAttributeWithKey("password").value
}
var headers = new Properties();

var throwResponseBody = true;
var method = "GET";
var timeout = 300;

if (!queryParameters) {
	queryParameters = new Properties();
}

var response = rest.doJsonRequest(baseUrl,path,method,null,headers,queryParameters,timeout,credentials,throwResponseBody);

return response;
}
}
