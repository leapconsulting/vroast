/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createLdapGroupAttributes(backLinkIdentifierArg?: string, groupNameArg?: string, membershipArg?: string, membershipIdentifierArg?: string, objectClassArg?: string, objectIdentifierArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLdapGroupAttributes();
result["objectClass"] = objectClassArg;
result["membership"] = membershipArg;
result["membershipIdentifier"] = membershipIdentifierArg;
result["backLinkIdentifier"] = backLinkIdentifierArg;
result["groupName"] = groupNameArg;
result["objectIdentifier"] = objectIdentifierArg;
return result;
}
}
