/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.isilon {
export function getQuotaByQuotaId(isilonName?: string, quotaId?: string): any {var isilonRest = nl.umcg.isilon.rest;

var path = "platform/1/quota/quotas/" + quotaId

var response = isilonRest.doGetRequest(path,null,isilonName);

return response;
}
}
