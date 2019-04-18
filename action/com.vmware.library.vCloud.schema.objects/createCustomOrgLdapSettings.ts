/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCustomOrgLdapSettings(authenticationMechanismArg?: string, connectorTypeArg?: string, groupAttributesArg?: any, groupSearchBaseArg?: string, hostNameArg?: string, isGroupSearchBaseEnabledArg?: boolean, isSslArg?: boolean, isSslAcceptAllArg?: boolean, passwordArg?: string, portArg?: number, realmArg?: string, searchBaseArg?: string, useExternalKerberosArg?: boolean, userAttributesArg?: any, userNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCustomOrgLdapSettings();
result["password"] = passwordArg;
result["isSsl"] = isSslArg;
result["isSslAcceptAll"] = isSslAcceptAllArg;
result["searchBase"] = searchBaseArg;
result["authenticationMechanism"] = authenticationMechanismArg;
result["groupSearchBase"] = groupSearchBaseArg;
result["isGroupSearchBaseEnabled"] = isGroupSearchBaseEnabledArg;
result["connectorType"] = connectorTypeArg;
result["groupAttributes"] = groupAttributesArg;
result["useExternalKerberos"] = useExternalKerberosArg;
result["userAttributes"] = userAttributesArg;
result["userName"] = userNameArg;
result["port"] = portArg;
result["hostName"] = hostNameArg;
result["realm"] = realmArg;
return result;
}
}
