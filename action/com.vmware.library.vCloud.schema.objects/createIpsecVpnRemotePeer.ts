/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createIpsecVpnRemotePeer(nameArg?: string, vcdOrganizationArg?: string, vcdUrlArg?: string, vcdUsernameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIpsecVpnRemotePeer();
result["vcdOrganization"] = vcdOrganizationArg;
result["vcdUrl"] = vcdUrlArg;
result["vcdUsername"] = vcdUsernameArg;
result["name"] = nameArg;
return result;
}
}
