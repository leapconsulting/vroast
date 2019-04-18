/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getDepartmentNames(): Array<string> {var freshServiceRest = nl.itq.freshservice.rest;
var freshService = nl.itq.freshservice;
var tools = be.itq.package.tools;

var stringUtils = tools.getStringUtils();

var path = "/itil/departments.json"

var queryParameters = new Properties();
var headers = new Properties();

var response = freshServiceRest.doGetRequest(path,queryParameters,null,headers);

var departments = response.map(function(department) {
	return department.name;
});

return departments;
}
}
