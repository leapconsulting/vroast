/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ansible {
export function getPing(): any {var ansibleRest = nl.umcg.ansible.rest;

var path = "ping"

var response = ansibleRest.doGetRequest(path,null);

return response;
}
}
