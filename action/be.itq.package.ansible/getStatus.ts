/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ansible {
export function getStatus(jobID?: string): any {var ansibleRest = nl.umcg.ansible.rest;
var tools = com.umcg.tools;

var stringUtils = tools.getStringUtils();

var path = stringUtils.format("job/{0}", jobID);

var response = ansibleRest.doPostRequest(path,null);

return response;
}
}
