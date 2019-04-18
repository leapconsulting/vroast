/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgFederationSettings(enabledArg?: boolean, sAMLMetadataArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgFederationSettings();
result["enabled"] = enabledArg;
result["sAMLMetadata"] = sAMLMetadataArg;
return result;
}
}
