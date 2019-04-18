/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ansible {
export function provisionHost(hostname?: string): any {var ansibleRest = nl.umcg.ansible.rest;
var tools = com.umcg.tools;

var stringUtils = tools.getStringUtils();

var path = stringUtils.format("host/{0}/provision", hostname);

var response = ansibleRest.doPostRequest(path,null);

return response;
}
}
