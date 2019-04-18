/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ansible {
export function getHostByName(hostname?: string): any {var ansibleRest = nl.umcg.ansible.rest;

var path = "host/" + hostname;

var response = ansibleRest.doGetRequest(path,null);

return response;
}
}
