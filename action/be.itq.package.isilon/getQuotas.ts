/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.isilon {
export function getQuotas(isilonName?: string): any {var isilonRest = nl.umcg.isilon.rest;

var path = "platform/1/quota/quotas"

var response = isilonRest.doGetRequest(path,null,isilonName);

return response;
}
}
