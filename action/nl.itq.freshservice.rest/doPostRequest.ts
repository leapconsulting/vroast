/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice.rest {
export function doPostRequest(path?: string, queryParameters?: any, data?: any, headers?: any): any {var tools = be.itq.package.tools;
var rest = be.itq.package.rest;
var stringUtils = tools.getStringUtils();

var actionName = arguments.callee.name;


if (!path) {
	throw "'path' cannot be null";
}

var ceName = stringUtils.format("freshservice");

var freshConfiguration = tools.getConfigurationElement(ceName);

var credentials = {
	username: freshConfiguration.getAttributeWithKey("username").value,
	password: freshConfiguration.getAttributeWithKey("password").value	
};

var baseUrl = freshConfiguration.getAttributeWithKey("baseUrl").value;

// default values
var method = "POST";
var timeout = 60;
var throwResponseBody = true;
var transient = true;

if (!data) {
	data = new Properties();
}

if (!headers) {
	headers = new Properties();
}

var request;

System.log("[Action] (" + this.name + ")." + actionName + " : Performing " + method + " on '" + path + "' ");

request = rest.doJsonRequest(baseUrl,path,method,data,headers,queryParameters,timeout,credentials,throwResponseBody);

return request;
}
}
