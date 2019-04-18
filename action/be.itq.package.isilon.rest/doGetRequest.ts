/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.isilon.rest {
export function doGetRequest(path?: string, queryParameters?: Properties, isilonName?: string): any {var rest = nl.umcg.rest;
var tools = com.umcg.tools;


var ce = tools.getConfigurationElement("isilon-" + isilonName);

if (!path) {
	throw "Variable 'path' has not been set";
}

var baseUrl = ce.getAttributeWithKey("baseUrl").value;
var credentials = {
	username : ce.getAttributeWithKey("username").value,
	password : ce.getAttributeWithKey("password").value,
};

var throwResponseBody = true;
var method = "GET";
var timeout = 60;

if (!queryParameters) {
	queryParameters = new Properties();
}

var response = rest.doJsonRequest(baseUrl,path,method,null,null,queryParameters,timeout,credentials,throwResponseBody)

return response;
}
}
