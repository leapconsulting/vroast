/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyLicensingReport(targetEntityArg?: vCloud.LicensingReport, productSerialNumberArg?: string, reportDateArg?: any, signatureArg?: string): vCloud.LicensingReport {// WARNING: Auto generated code. Please, do not edit this code.
if (reportDateArg != null) {
	targetEntityArg["reportDate"] = reportDateArg;
}
if (productSerialNumberArg != null) {
	targetEntityArg["productSerialNumber"] = productSerialNumberArg;
}
if (signatureArg != null) {
	targetEntityArg["signature"] = signatureArg;
}
return targetEntityArg;
}
}
