/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgLdapUserAttributes(emailArg?: string, fullNameArg?: string, givenNameArg?: string, groupBackLinkIdentifierArg?: string, groupMembershipIdentifierArg?: string, objectClassArg?: string, objectIdentifierArg?: string, surnameArg?: string, telephoneArg?: string, userNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgLdapUserAttributes();
result["email"] = emailArg;
result["fullName"] = fullNameArg;
result["objectClass"] = objectClassArg;
result["groupMembershipIdentifier"] = groupMembershipIdentifierArg;
result["groupBackLinkIdentifier"] = groupBackLinkIdentifierArg;
result["userName"] = userNameArg;
result["telephone"] = telephoneArg;
result["surname"] = surnameArg;
result["givenName"] = givenNameArg;
result["objectIdentifier"] = objectIdentifierArg;
return result;
}
}
