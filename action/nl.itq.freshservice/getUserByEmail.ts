/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getUserByEmail(emailAddress?: string): any {var freshServiceRest = nl.itq.freshservice.rest;
var freshService = nl.itq.freshservice;
var tools = be.itq.package.tools;

var stringUtils = tools.getStringUtils();

var path = "/itil/requesters.json"

var queryParameters = new Properties();
	queryParameters.put("query", "email is " + emailAddress);
var headers = new Properties();

var response = freshServiceRest.doGetRequest(path,queryParameters,null,headers);

if (response.length == 1) {
	return response[0];
} else {
	System.log("Could not find user");
}

return null;
}
}
