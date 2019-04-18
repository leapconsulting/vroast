/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createExternalCatalogSubscriptionParams(expectedSslThumbprintArg?: string, localCopyArg?: boolean, locationArg?: string, passwordArg?: string, subscribeToExternalFeedsArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclExternalCatalogSubscriptionParams();
result["password"] = passwordArg;
result["subscribeToExternalFeeds"] = subscribeToExternalFeedsArg;
result["expectedSslThumbprint"] = expectedSslThumbprintArg;
result["localCopy"] = localCopyArg;
result["location"] = locationArg;
return result;
}
}
