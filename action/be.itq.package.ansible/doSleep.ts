/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ansible {
export function doSleep(): any {var ansibleRest = nl.umcg.ansible.rest;

var path = "sleep/200"

var response = ansibleRest.doGetRequest(path,null);

return response;
}
}
