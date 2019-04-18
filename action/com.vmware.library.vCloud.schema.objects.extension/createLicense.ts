/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createLicense(expirationDateArg?: any, expiredArg?: boolean, licenseMetricsInfoArg?: any, licensedVMCountArg?: number, persistedArg?: boolean, publishingToRemoteSitesFeatureArg?: boolean, serialNumberArg?: string, subscribingToRemoteSitesFeatureArg?: boolean, validSerialArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLicense();
result["expirationDate"] = expirationDateArg;
result["expired"] = expiredArg;
result["licensedVMCount"] = licensedVMCountArg;
result["serialNumber"] = serialNumberArg;
result["validSerial"] = validSerialArg;
result["subscribingToRemoteSitesFeature"] = subscribingToRemoteSitesFeatureArg;
result["licenseMetricsInfo"] = licenseMetricsInfoArg;
result["persisted"] = persistedArg;
result["publishingToRemoteSitesFeature"] = publishingToRemoteSitesFeatureArg;
return result;
}
}
