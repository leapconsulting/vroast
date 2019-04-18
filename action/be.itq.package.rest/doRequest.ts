/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.rest {
export function doRequest(baseUrl?: string, path?: string, method?: string, contentType?: string, data?: string, headers?: Properties, queryParameters?: Properties, timeout?: number, credentials?: any, transient?: boolean): string {if (!baseUrl) {
	throw "'baseUrl' cannot be empty";
}

if (!path) {
	throw "'path' cannot be empty";
}

if (!method) {
	throw "'method' cannot be empty";
}

var rest = nl.umcg.rest;

var restHost = rest.getOrCreateRestHostByUrl(baseUrl);

if (transient) {
	restHost = RESTHostManager.createTransientHostFrom(restHost);
}

if (timeout) {
	restHost = restHost.clone(); // Clone so that we dont modify the default host.
	restHost.operationTimeout = timeout; // NSX BUG: Setting this property has no effect on an existing REST Host.
}

path = encodeURI(path);

var queryString;
if (queryParameters && queryParameters.keys.length > 0) {
	var parts = queryParameters.keys.map(function (key) {
		return key + "=" + encodeURIComponent(queryParameters.get(key));
	});
	queryString = parts.join("&");
}

var pathAndQuery = path + (queryString ? "?" + queryString : "");
System.log(method + " " + pathAndQuery);

var request = restHost.createRequest(method, pathAndQuery, data);

if (contentType) {
	request.contentType = contentType;
	request.setHeader("accept" , contentType);
}

if (headers) {
	for (var headerKey of headers.keys) {
		request.setHeader(headerKey, headers.get(headerKey));
	}
}

if (credentials) {
	var header = "Basic " + diagnostics.base64Encode(credentials.username + ":" + credentials.password);
	request.setHeader("Authorization", header);
}

var response = request.execute();
var statusCode = response.statusCode;

if (statusCode != 200 && statusCode != 204 && statusCode != 201 && statusCode != 202) {
	System.warn("Unexpected REST status code " + statusCode + " Response body: '" + response.contentAsString + "'");
	throw "Unexpected status code: " + statusCode + " Response body: '" + response.contentAsString + "'";
}

// 204 = no content
var responseContent = statusCode != 204 && response.contentAsString ? response.contentAsString : null;
return responseContent;
}
}
