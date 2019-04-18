/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getDepartments(): Array<string> {var tools = be.itq.package.tools;

var configurationElementName = "Departments";

var configurationElement = tools.getConfigurationElement(configurationElementName);
var attributes = configurationElement.attributes;

var departments = new Array();
attributes.forEach(function(attribute){
	departments.push(attribute.name);
}) 
return departments;

}
}
