/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ansible.rest {
export function doDeleteRequest(path?: string, queryParameters?: Properties): any {var rest = nl.umcg.rest;
var tools = com.umcg.tools;


var ce = tools.getConfigurationElement("Ansible");

if (!path) {
	throw "Variable 'path' has not been set";
}

var baseUrl = ce.getAttributeWithKey("baseUrl").value;
var apiKey = ce.getAttributeWithKey("apiKey").value;
var headers = new Properties();
	headers.put("X-Api-Key",apiKey);

var throwResponseBody = true;
var method = "DELETE";
var timeout = 60;

if (!queryParameters) {
	queryParameters = new Properties();
}

var response = rest.doJsonRequest(baseUrl,path,method,null,headers,queryParameters,timeout,null,throwResponseBody);

return response;
}
}
