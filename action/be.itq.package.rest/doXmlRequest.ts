/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.rest {
export function doXmlRequest(baseUrl?: string, path?: string, method?: string, data?: string, headers?: Properties, queryParameters?: Properties, timeout?: number, credentials?: any, throwResponseBody?: boolean, transient?: boolean): string {var rest = nl.umcg.rest;

var contentType = "application/xml";
return rest.doRequest(baseUrl, path, method, contentType, data, headers, queryParameters, timeout, credentials, throwResponseBody, transient);
}
}
