/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getFileServer(): Properties {var tools = be.itq.package.tools;

var configurationElementName = "FileServer";

var configurationElement = tools.getConfigurationElement(configurationElementName);
var attributes = configurationElement.attributes;

var fileServer = new Properties();
attributes.forEach(function(attribute){
	fileServer.put(attribute.name,attribute.value);
}) 
return fileServer;

}
}
