/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getDepartmentByName(departmentName?: string): any {var freshServiceRest = nl.itq.freshservice.rest;
var freshService = nl.itq.freshservice;
var tools = be.itq.package.tools;

var stringUtils = tools.getStringUtils();

var path = "/itil/departments.json"

var queryParameters = new Properties();
var headers = new Properties();

var response = freshServiceRest.doGetRequest(path,queryParameters,null,headers);

var department = response.filter(function(department) {
	return department.name == departmentName;
});

if (department.length == 1) {
	return department[0];
}

return null;
}
}
