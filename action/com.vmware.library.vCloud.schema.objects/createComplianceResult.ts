/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createComplianceResult(complianceCheckTimeArg?: any, complianceStatusArg?: string, complianceStatusMessageArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclComplianceResult();
result["complianceStatus"] = complianceStatusArg;
result["complianceStatusMessage"] = complianceStatusMessageArg;
result["complianceCheckTime"] = complianceCheckTimeArg;
return result;
}
}
