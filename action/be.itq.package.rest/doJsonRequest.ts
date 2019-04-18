/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.rest {
export function doJsonRequest(baseUrl?: string, path?: string, method?: string, data?: any, headers?: Properties, queryParameters?: Properties, timeout?: number, credentials?: any, throwResponseBody?: boolean): any {if (!baseUrl) {
	throw "'baseUrl' cannot be empty";
}

if (!path) {
	throw "'path' cannot be empty";
}

if (!method) {
	throw "'method' cannot be empty";
}

var rest = be.itq.package.rest;
var generic = be.itq.package.generic;

var b64Encode = generic.base64Encode;

var json = data ? JSON.stringify(data) : null;
var restHost = rest.getOrCreateRestHostByUrl(baseUrl);

if (timeout) {
	restHost = restHost.clone(); // Clone so that we dont modify the default host.
	restHost.operationTimeout = timeout;
}

path = encodeURI(path);

var queryString;
if (queryParameters && queryParameters.keys.length > 0) {
	var parts = queryParameters.keys.map(function (key) {
		return encodeURIComponent(key) + "=" + encodeURIComponent(queryParameters.get(key));
	});
	queryString = parts.join("&");
}

var pathAndQuery = path + (queryString ? "?" + queryString : "");
System.log(method + " " + pathAndQuery);

var request = restHost.createRequest(method, pathAndQuery, json);
request.contentType = "application/json";
request.setHeader("accept" , "application/json");

if (credentials) {
	var header = "Basic " + b64Encode(credentials.username + ":" + credentials.password);
	request.setHeader("Authorization", header);
}

if (headers) {
	for (var headerKey of headers.keys) {
		request.setHeader(headerKey, headers.get(headerKey));
	}
}

System.log("AssetData: \n" + json);

var response = request.execute();
var statusCode = response.statusCode;

if (statusCode != 200 && statusCode != 204 && statusCode != 201) {
	System.warn("Unexpected REST status code " + statusCode + " response body: '" + response.contentAsString + "'");
	var message = throwResponseBody ? response.contentAsString : ("Unexpected status code: " + statusCode);
	throw message;
}

// 204 = no content
var responseContent = null;

if (statusCode != 204 && response.contentAsString) {
	try {
		responseContent = JSON.parse(response.contentAsString);
	} catch (exception) {
		System.log("Error parsing response content: '" + exception + "'. Content: '" + response.contentAsString + "'");
		throw exception;
	}
}

return responseContent;
}
}
