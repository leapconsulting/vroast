/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ansible {
export function getHosts(): any {var ansibleRest = nl.umcg.ansible.rest;

var path = "hosts";

var response = ansibleRest.doGetRequest(path,null);

return response;
}
}
