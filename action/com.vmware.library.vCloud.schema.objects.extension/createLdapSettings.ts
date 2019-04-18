/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createLdapSettings(authenticationMechanismArg?: string, connectorTypeArg?: string, groupAttributesArg?: any, groupSearchBaseArg?: string, hostNameArg?: string, isGroupSearchBaseEnabledArg?: boolean, isSslArg?: boolean, isSslAcceptAllArg?: boolean, maxResultsArg?: number, maxUserGroupsArg?: number, pageSizeArg?: number, pagedSearchDisabledArg?: boolean, passwordArg?: string, portArg?: number, realmArg?: string, searchBaseArg?: string, useExternalKerberosArg?: boolean, userAttributesArg?: any, userNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLdapSettings();
result["password"] = passwordArg;
result["isSsl"] = isSslArg;
result["isSslAcceptAll"] = isSslAcceptAllArg;
result["pagedSearchDisabled"] = pagedSearchDisabledArg;
result["maxResults"] = maxResultsArg;
result["maxUserGroups"] = maxUserGroupsArg;
result["searchBase"] = searchBaseArg;
result["authenticationMechanism"] = authenticationMechanismArg;
result["groupSearchBase"] = groupSearchBaseArg;
result["isGroupSearchBaseEnabled"] = isGroupSearchBaseEnabledArg;
result["connectorType"] = connectorTypeArg;
result["groupAttributes"] = groupAttributesArg;
result["useExternalKerberos"] = useExternalKerberosArg;
result["userAttributes"] = userAttributesArg;
result["userName"] = userNameArg;
result["pageSize"] = pageSizeArg;
result["port"] = portArg;
result["hostName"] = hostNameArg;
result["realm"] = realmArg;
return result;
}
}
