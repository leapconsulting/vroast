/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ansible {
export function deleteHost(hostname?: string): any {var ansibleRest = nl.umcg.ansible.rest;
var tools = com.umcg.tools;

var stringUtils = tools.getStringUtils();

var path = stringUtils.format("host/{0}", hostname);

var response = ansibleRest.doDeleteRequest(path,null);

return response;
}
}
