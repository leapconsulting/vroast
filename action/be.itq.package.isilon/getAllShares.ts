/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.isilon {
export function getAllShares(isilonName?: string): any {var isilonRest = nl.umcg.isilon.rest;

var path = "platform/1/protocols/smb/shares"

var response = isilonRest.doGetRequest(path,null,isilonName);

return response;
}
}
